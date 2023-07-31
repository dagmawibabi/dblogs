import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function EachBlog (blogIntro: any) {
    return (
        <div className="
            relative w-96 h-52 rounded-2xl z-0 border-zinc-800 border border-t-0 border-l-0 
            hover:border-zinc-700 hover:border-2 hover:border-t-0 hover:border-l-0 hover:bg-zinc-900">
            <div className="
                absolute w-96 h-52 -m-2 p-4 border-2 rounded-xl border-zinc-700
                hover:border-zinc-200 hover:-m-4 hover:bg-[#0A0A0A]">
                
                {/* Icon */}
                {/* <FontAwesomeIcon icon={faNewspaper} className="text-zinc-500 hover:text-white hover:scale-125 mb-5" width={30} height={30} /> */}

                {/* Date */}
                <span className="text-zinc-500 text-sm"> 
                    {blogIntro["title"]}
                    July 12, 2023 
                </span>


                {/* Title */}
                <div className="text-2xl font-bold mb-5 mt-2">
                    {blogIntro["title"]}
                    Title
                </div>

                {/* Description */}
                <p> 
                    {blogIntro["description"]}  
                    description             
                </p>
            </div>
        </div>
    )
}

