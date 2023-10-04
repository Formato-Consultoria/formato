import { PropsSlider } from "@/@types/article";

export function Slider({
  files
}: PropsSlider) {
  return <>{files.map((_) => (
    <strong key={_.id} className={"bg-purple-600/70"}>{_.name}</strong>
  ))}</>
}