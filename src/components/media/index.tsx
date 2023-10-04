import { PropsMedia } from "@/@types/article";

export function Media({
  file
}: PropsMedia) {
  return <div>{file.name}</div>
}

const File = {
  'image': <></>,
  'pdf': <></>,
  'txt': <></>,
  'mp4': <></>,
}