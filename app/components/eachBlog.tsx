import Link from "next/link";


export default function EachBlog(blogIntroObj: blogIntro) {
    return (
        <Link href={`blogs/${blogIntroObj.title}`} target="_blank">
            <div className="
                no-scrollbar
                relative w-96 h-52 rounded-2xl z-0 border-zinc-800 border border-t-0 border-l-0 
                hover:border-zinc-700 hover:border-2 hover:border-t-0 hover:border-l-0 hover:bg-zinc-900">
                <div className="
                    absolute w-96 h-52 -m-2 p-4 border-2 rounded-xl border-zinc-700 overflow-hidden text-zinc-300
                    hover:border-zinc-200 hover:-m-4 hover:bg-[#0A0A0A] hover:text-white">

                    {/* Icon */}
                    {/* <FontAwesomeIcon icon={faNewspaper} className="text-zinc-500 hover:text-white hover:scale-125 mb-5" width={30} height={30} /> */}

                    {/* Date */}
                    <span className="text-zinc-500 text-sm">
                        {blogIntroObj.date}
                    </span>


                    {/* Title */}
                    <div className="text-xl font-bold mb-3 mt-1">
                        {blogIntroObj.title}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-400">
                        {blogIntroObj.description}
                    </p>

                </div>
            </div>
        </Link>
    )
}

