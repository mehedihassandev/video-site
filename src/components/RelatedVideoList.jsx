import { RelatedVideoItem } from "./RelatedVideoItem"

export const RelatedVideoList = () => {
  return (
    <div
      className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
    >

      <RelatedVideoItem />
    </div>
  )
}

export default RelatedVideoList