import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export async function getBase64RemoteImage(
    image: string,
): Promise<string> {
    const buffer = await fetch(image).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    return base64;
}

export async function getBase64LocalImage(
    image: string
): Promise<string> {
    try {
        const file = await fs.readFile(image);
        const { base64 } = await getPlaiceholder(file);
        return base64;
    } catch (err: any) {
        console.error(err);
        return err;
    }
}