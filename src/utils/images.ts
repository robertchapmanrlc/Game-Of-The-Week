'use server';
import sharp from "sharp";

function bufferToBase64(buffer: Buffer) {
  return `data:image/png;base64,${buffer.toString('base64')}`
}

async function getRemoteImageBuffer(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("could not fetch image buffer");
  }

  return Buffer.from(await response.arrayBuffer());
}

export async function getPlaceHolderImage(url: string) {
  try {
    const originalBuffer = await getRemoteImageBuffer(url);
    const resizedBuffer = await sharp(originalBuffer).resize(20).toBuffer();

    return {
      src: url,
      placeholder: bufferToBase64(resizedBuffer)
    }

  } catch (error) {
    return {
      src: url,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==",
    };
  }
}
