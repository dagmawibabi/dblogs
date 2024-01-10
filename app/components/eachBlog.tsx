import Link from "next/link";


export default function EachBlog({ blogIntroObj, isClickable }: { blogIntroObj: blogIntro, isClickable: boolean }) {
    let isRecent = false;
    
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let blogDateArray = blogIntroObj.date.toString().split(" ")
    let blogYear = parseInt(blogDateArray[2]);
    let blogMonth = blogDateArray[0].toString().substring(0,3);
    let yearDifference = year - blogYear;
    if(yearDifference == 0){
        let monthDifference = Math.abs(months.indexOf(blogMonth) - parseInt(month));
        if(monthDifference > 5 || months.indexOf(blogMonth) == parseInt(month) || monthDifference < 3){
            isRecent = true;
        } 
    } else if(yearDifference <= 1){
        months = months.reverse();
        let monthDifference = Math.abs(months.indexOf(blogMonth) - parseInt(month));
        if(monthDifference < 3 || blogMonth == month){
            isRecent = true;
        } 
    }

    return (
        <Link href={isClickable == false ? "" : `blogs/${blogIntroObj.title}?date=${blogIntroObj.date}`} target={isClickable == false ? "" : "_blank"}>
            <div className="
                    no-scrollbar 
                    relative w-full h-52 rounded-2xl z-0 border-zinc-800 border border-t-0 border-l-0 
                    hover:border-zinc-700 hover:border-2 hover:border-t-0 hover:border-l-0 hover:bg-zinc-900 duration-[0.4s]
                    sm:w-full md:w-full lg:w-96 xl:w-96 2xl:w-96
                ">
                <div className="
                        overflow-scroll no-scrollbar
                        absolute w-full h-full -m-2 p-4 border-2 rounded-xl border-zinc-700 text-zinc-300
                        hover:border-zinc-200 hover:bg-[#0A0A0A] hover:text-white hover:-m-4 duration-[0.2s]
                        sm:w-full md:w-full lg:w-96 xl:w-96 2xl:w-96
                    ">

                    {/* Date */}
                    <div className="flex justify-between">
                    <span className="text-zinc-500 text-xs">
                        {blogIntroObj.date} 
                    </span>
                    <span className={isClickable == true ? "text-emerald-400 text-xs font-bold uppercase" : "text-cyan-500 text-xs font-bold uppercase"}>
                        { isRecent == true ? "New" : (isClickable == false ? "Soon" : "") }
                    </span>
                    </div>


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

