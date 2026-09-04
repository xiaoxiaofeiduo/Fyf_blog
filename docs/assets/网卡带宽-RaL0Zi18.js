const r=`---\r
title: 如何判断 40G 网卡的 PCIe 带宽是否足够\r
date: 2026-05-29\r
summary: 通过 lspci 查看 40G 网卡的 PCIe 链路速率和通道宽度，判断服务器是否具备跑满 40G 网络吞吐的硬件带宽。\r
tags: Linux, 网卡, PCIe, 系统运维\r
cover: app-orange\r
readingTime: 5 分钟\r
featured: false\r
---\r
\r
# 如何判断 40G 网卡的 PCIe 带宽是否足够\r
\r
在做 40G 网络吞吐测试时，不能只看网卡标称速率。网卡虽然是 40GbE，但如果插槽、主板通道分配或 PCIe 链路协商不足，实际从 CPU 到网卡之间的 PCIe 带宽可能成为瓶颈。\r
\r
排查时重点看 \`lspci -vvv\` 输出里的 \`LnkSta\`：\r
\r
\`\`\`text\r
LnkSta: Speed 8GT/s (ok), Width x8 (ok)\r
\`\`\`\r
\r
其中：\r
\r
* \`Speed\` 表示当前 PCIe 链路速率。\r
* \`Width\` 表示当前使用的 PCIe 通道数量。\r
\r
对于一张 40G 网卡，常见判断标准是：PCIe 3.0 x8 一般足够，PCIe 3.0 x4 不足以支撑完整 40G 吞吐。\r
\r
## 查看网卡的 PCIe 链路状态\r
\r
先通过 \`lspci\` 找到 40G 网卡：\r
\r
\`\`\`bash\r
lspci | grep -i ethernet\r
\`\`\`\r
\r
再查看设备详细信息：\r
\r
\`\`\`bash\r
sudo lspci -vvv -s 0c:00.0\r
\`\`\`\r
\r
如果不确定设备号，也可以直接查看全部 PCIe 设备，再定位网卡部分：\r
\r
\`\`\`bash\r
sudo lspci -vvv\r
\`\`\`\r
\r
重点关注 \`Capabilities\` 中的 \`LnkCap\` 和 \`LnkSta\`：\r
\r
\`\`\`text\r
LnkCap: Port #0, Speed 8GT/s, Width x8, ASPM L1, Exit Latency L1 <16us\r
LnkSta: Speed 8GT/s (ok), Width x8 (ok)\r
\`\`\`\r
\r
\`LnkCap\` 表示设备或链路能力，\`LnkSta\` 表示当前实际协商出来的运行状态。判断当前是否够用时，以 \`LnkSta\` 为准。\r
\r
## 案例一：PCIe 3.0 x8，带宽足够\r
\r
某台设备上的 Intel XL710 40GbE 网卡输出如下：\r
\r
\`\`\`text\r
0c:00.0 Ethernet controller: Intel Corporation Ethernet Controller XL710 for 40GbE QSFP+ (rev 02)\r
        Subsystem: Intel Corporation Ethernet Converged Network Adapter XL710-Q2\r
        Capabilities: [a0] Express (v2) Endpoint, MSI 00\r
                LnkCap: Port #0, Speed 8GT/s, Width x8, ASPM L1, Exit Latency L1 <16us\r
                LnkSta: Speed 8GT/s (ok), Width x8 (ok)\r
        Kernel driver in use: i40e\r
        Kernel modules: i40e\r
\r
0c:00.1 Ethernet controller: Intel Corporation Ethernet Controller XL710 for 40GbE QSFP+ (rev 02)\r
        Subsystem: Intel Corporation Ethernet Converged Network Adapter XL710-Q2\r
        Capabilities: [a0] Express (v2) Endpoint, MSI 00\r
                LnkCap: Port #0, Speed 8GT/s, Width x8, ASPM L1, Exit Latency L1 <16us\r
                LnkSta: Speed 8GT/s (ok), Width x8 (ok)\r
        Kernel driver in use: i40e\r
        Kernel modules: i40e\r
\`\`\`\r
\r
实际状态是：\r
\r
\`\`\`text\r
Speed 8GT/s, Width x8\r
\`\`\`\r
\r
\`8GT/s\` 是 PCIe 3.0 的链路速率。PCIe 3.0 使用 \`128b/130b\` 编码，扣除编码开销后，每条 lane 的有效传输速率约为：\r
\r
\`\`\`text\r
8GT/s x 128 / 130 = 7.88Gbps\r
\`\`\`\r
\r
该设备当前是 x8 通道，因此单向有效带宽约为：\r
\r
\`\`\`text\r
7.88Gbps x 8 = 63.04Gbps\r
\`\`\`\r
\r
63Gbps 高于 40Gbps，所以这张网卡所在 PCIe 链路具备测试 40G 网络吞吐的基础条件。\r
\r
## 案例二：PCIe 3.0 x4，带宽不足\r
\r
另一台设备同样是 40G 网卡，但 \`LnkSta\` 显示为 x4：\r
\r
\`\`\`text\r
61:00.0 Ethernet controller: Intel Corporation Ethernet Controller XL710 for 40GbE QSFP+ (rev 02)\r
        Subsystem: Intel Corporation Ethernet Converged Network Adapter XL710-Q2\r
        Capabilities: [a0] Express (v2) Endpoint, MSI 00\r
                LnkCap: Port #0, Speed 8GT/s, Width x4, ASPM L1, Exit Latency L0s <2us, L1 <16us\r
                LnkSta: Speed 8GT/s, Width x4, TrErr- Train- SlotClk+ DLActive- BWMgmt- ABWMgmt-\r
        Kernel driver in use: i40e\r
\r
61:00.1 Ethernet controller: Intel Corporation Ethernet Controller XL710 for 40GbE QSFP+ (rev 02)\r
        Capabilities: [a0] Express (v2) Endpoint, MSI 00\r
                LnkCap: Port #0, Speed 8GT/s, Width x4, ASPM L1, Exit Latency L0s <2us, L1 <16us\r
                LnkSta: Speed 8GT/s, Width x4, TrErr- Train- SlotClk+ DLActive- BWMgmt- ABWMgmt-\r
        Kernel driver in use: i40e\r
\`\`\`\r
\r
实际状态是：\r
\r
\`\`\`text\r
Speed 8GT/s, Width x4\r
\`\`\`\r
\r
同样按 PCIe 3.0 计算：\r
\r
\`\`\`text\r
7.88Gbps x 4 = 31.52Gbps\r
\`\`\`\r
\r
31.52Gbps 低于 40Gbps，因此这张网卡虽然标称是 40GbE，但当前 PCIe 链路本身无法支撑完整 40G 吞吐测试。\r
\r
## 快速判断方法\r
\r
可以把判断过程简化成三步：\r
\r
1. 用 \`sudo lspci -vvv\` 找到 40G 网卡。\r
2. 查看当前实际链路状态 \`LnkSta\`。\r
3. 根据 \`Speed\` 和 \`Width\` 估算 PCIe 单向有效带宽。\r
\r
常见结论：\r
\r
| 当前链路状态 | 约等效单向有效带宽 | 是否适合 40G 吞吐测试 |\r
| --- | ---: | --- |\r
| PCIe 3.0 x4 | 31.52Gbps | 不足 |\r
| PCIe 3.0 x8 | 63.04Gbps | 足够 |\r
| PCIe 4.0 x4 | 63.04Gbps | 足够 |\r
| PCIe 4.0 x8 | 126.03Gbps | 足够 |\r
\r
注意：这里讨论的是 PCIe 单向理论有效带宽。实际网络吞吐还会受到 CPU、NUMA、驱动、队列数、包大小、iperf 参数、交换机端口、光模块和线缆等因素影响。\r
\r
## PCIe 版本速率速查\r
\r
| PCIe 版本 | 编码方式 | 传输速率 | x1 吞吐量 | x4 吞吐量 | x8 吞吐量 | x16 吞吐量 |\r
| --- | --- | --- | ---: | ---: | ---: | ---: |\r
| PCIe 1.0 | 8b/10b | 2.5GT/s | 250MB/s | 1GB/s | 2GB/s | 4GB/s |\r
| PCIe 2.0 | 8b/10b | 5GT/s | 500MB/s | 2GB/s | 4GB/s | 8GB/s |\r
| PCIe 3.0 | 128b/130b | 8GT/s | 984.6MB/s | 3.938GB/s | 7.877GB/s | 15.754GB/s |\r
| PCIe 4.0 | 128b/130b | 16GT/s | 1.969GB/s | 7.877GB/s | 15.754GB/s | 31.508GB/s |\r
| PCIe 5.0 | 128b/130b | 32GT/s | 3.938GB/s | 15.754GB/s | 31.508GB/s | 63.015GB/s |\r
\r
换算时注意单位：\`lspci\` 中按 \`GT/s\` 展示 PCIe 链路速率，网络吞吐通常按 \`Gbps\` 计算，而 PCIe 表格里常见的是 \`GB/s\`。粗略换算时，\`1GB/s = 8Gbps\`。\r
\r
## 结论\r
\r
判断 40G 网卡是否有足够 PCIe 带宽，核心不是看网卡型号，而是看当前协商出来的链路状态：\r
\r
\`\`\`text\r
LnkSta: Speed 8GT/s, Width x8\r
\`\`\`\r
\r
如果是 PCIe 3.0 x8，理论单向有效带宽约 63Gbps，足够支撑 40G 网卡吞吐测试。\r
\r
如果是 PCIe 3.0 x4，理论单向有效带宽约 31.52Gbps，不足以跑满 40G。此时应检查网卡插槽规格、主板 PCIe 通道分配、BIOS 设置，以及是否插在了只提供 x4 通道的槽位上。\r
`;export{r as default};
