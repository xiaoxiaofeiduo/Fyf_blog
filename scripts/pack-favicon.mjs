import { readFile, writeFile } from 'node:fs/promises';

const [outputPath, ...inputPaths] = process.argv.slice(2);

if (!outputPath || inputPaths.length === 0) {
  throw new Error('Usage: node scripts/pack-favicon.mjs <output.ico> <icon.png> [...]');
}

const images = await Promise.all(
  inputPaths.map(async (path) => {
    const data = await readFile(path);
    if (data.readUInt32BE(0) !== 0x89504e47) {
      throw new Error(`${path} is not a PNG file`);
    }

    return {
      data,
      width: data.readUInt32BE(16),
      height: data.readUInt32BE(20),
    };
  }),
);

const headerSize = 6;
const entrySize = 16;
let imageOffset = headerSize + entrySize * images.length;
const directory = Buffer.alloc(imageOffset);

directory.writeUInt16LE(0, 0);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(images.length, 4);

images.forEach(({ data, width, height }, index) => {
  const offset = headerSize + index * entrySize;
  directory.writeUInt8(width === 256 ? 0 : width, offset);
  directory.writeUInt8(height === 256 ? 0 : height, offset + 1);
  directory.writeUInt8(0, offset + 2);
  directory.writeUInt8(0, offset + 3);
  directory.writeUInt16LE(1, offset + 4);
  directory.writeUInt16LE(32, offset + 6);
  directory.writeUInt32LE(data.length, offset + 8);
  directory.writeUInt32LE(imageOffset, offset + 12);
  imageOffset += data.length;
});

await writeFile(outputPath, Buffer.concat([directory, ...images.map(({ data }) => data)]));
