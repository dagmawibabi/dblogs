import EachBlog from "./eachBlog"

export default function EachBlogCategory(category: allBlogs) {
    return <div className="">
        <div className="mb-5 text-lg sticky top-0 py-5 text-white z-50 h-fit w-full  
                sm:text-xl
            ">
            {category.category.toString()}
        </div>
        <div className="
                grid grid-cols-1 gap-y-6 ml-1 mx-auto w-full
                sm:gap-y-12 md:gap-y-12 lg:gap-y-12 xl:gap-y-12 2xl:gap-y-12
                sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2
                sm:w-full md:w-full lg:w-full xl:w-11/12 2xl:w-full 
            ">
            {
                category.blogs.map((content, index) => {
                    return <EachBlog key={index} blogIntroObj={content} isClickable={category.category == "Coming Soon" ? false : true} />
                })
            }
        </div>

        {/* Divider Line */}
        <div className="
            w-52 mt-6 mb-1 bg-zinc-800 h-[0.5px]
            sm:mt-12 md:mt-12 lg:mt-12 xl:mt-12 2xl:mt-12
            sm:mb-5 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-5
        ">
        </div>
    </div>
}