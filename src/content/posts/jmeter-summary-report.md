---
title: JMeter summary report 汇总报告字段说明
date: 2026-05-24
summary: 迁移旧博客中对 JMeter summary report 汇总报告各字段含义的整理。
tags: JMeter, 性能测试, 汇总报告
cover: app-yellow
readingTime: 4 分钟
featured: false
---

# 简介

JMeter summary report（汇总报告）相关字段意义。

## Label

    取样器/监听器名称

## #Samples

    总共发给服务器的请求数量，如果模拟 10 个用户，每个用户迭代 10 次，那么总的请求数为：10*10 =100 次；

## Average

    默认情况下是单个 Request 的平均响应时间，当使用了 Transaction Controller 时，以 Transaction 为单位显示平均响应时间，单位是毫秒

## Min

    最小响应时间（单位：毫秒）

## Max

    最大响应时间（单位：毫秒）

## Std.Dev

    偏离量，越小表示越稳定

## Error%

    错误事务率（错误率=错误的请求的数量/请求的总数）

## Throughtput

    每秒事务数，即 tps；（默认情况下表示每秒完成的请求数（Request per Second），当使用了 Transaction Controller 时，也可以表示类似 LoadRunner 的 Transaction per Second 数）

## Received KB/sec

    网络吞吐量（每秒从服务器端接收到的数据量）
