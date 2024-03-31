import { VideoPlayer } from '../components/VideoPlayer'
import { VideoDescription } from '../components/VideoDescription'
import { RelatedVideoList } from '../components/RelatedVideoList'

export const Video = () => {
  return (

    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-screen-2xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <VideoPlayer />

            <VideoDescription />
          </div>

          <RelatedVideoList />
        </div>
      </div>
    </section>
  )
}

export default Video