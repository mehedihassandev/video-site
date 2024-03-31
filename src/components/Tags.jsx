import { Tag } from "./Tag"

export const Tags = () => {
  return (
    <section>
      <div
        className="max-w-screen-2xl mx-auto px-5 py-6 lg:px-0 flex gap-2 overflow-y-auto"
      >
        <Tag />
      </div>
    </section>
  )
}

export default Tags