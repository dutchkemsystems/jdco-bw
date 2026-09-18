import { ThreeDotMark } from "./ThreeDotMark"

export function BrandSignature() {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-muted-text">
      <ThreeDotMark />
      <span>Feel It.</span>
    </span>
  )
}
