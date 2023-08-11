import Link from "next/link";


export default function EachBlog(blogIntroObj: blogIntro) {
    return (
        <Link href={`blogs/${blogIntroObj.title}`} target="_blank">
            <div className="
                no-scrollbar
                relative w-full h-52 rounded-2xl z-0 border-zinc-800 border border-t-0 border-l-0 
                hover:border-zinc-700 hover:border-2 hover:border-t-0 hover:border-l-0 hover:bg-zinc-900
                sm:w-full md:w-full lg:w-96 xl:w-96 sm:h-52 md:h-52 lg:h-52 xl:h-52">
                <div className="
                    absolute w-full h-52 -m-2 p-4 border-2 rounded-xl border-zinc-700 overflow-hidden text-zinc-300
                    hover:border-zinc-200 hover:-m-4 hover:bg-[#0A0A0A] hover:text-white
                    sm:w-full md:w-full lg:w-96 xl:w-96 sm:h-52 md:h-52 lg:h-52 xl:h-52">

                    {/* Date */}
                    <span className="text-zinc-500 text-xs">
                        {blogIntroObj.date}
                    </span>


                    {/* Title */}
                    <div className="text-md font-bold mb-0 mt-1 text-white
                    sm:text-xl sm:mb-3
                    sm:text-zinc-300 md:text-zinc-300 lg:text-zinc-300 xl:text-zinc-300">
                        {blogIntroObj.title}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-400 mt-2">
                        {blogIntroObj.description}
                    </p>

                </div>
            </div>
        </Link>
    )
}

