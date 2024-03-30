
export const Video = () => {
  return (
    <div
      className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
    >
      <div className="w-full flex flex-col">
        <div className="relative">
          <a href="video.html">
            <img
              src="https://dummyimage.com/600x400/000/fff"
              className="w-full h-auto"
              alt="Some video title"
            />
          </a>

          <p
            className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
          >
            12:10
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <a href="#" className="shrink-0">
            <img
              src="https://avatars.dicebear.com/api/avataaars/mehedi.svg?mood[]=happy"
              className="rounded-full h-6 w-6"
              alt="Learn with Sumit"
            />
          </a>

          <div className="flex flex-col">
            <a href="video.html">
              <p
                className="text-slate-900 text-sm font-semibold"
              >
                Lorem ipsum dolor sit amet consectetur
              </p>
            </a>
            <a
              className="text-gray-400 text-xs mt-2 hover:text-gray-600"
              href="#"
            >
              Md Mehedi Hassan
            </a>
            <p className="text-gray-400 text-xs mt-1">
              200 views . May 3, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video