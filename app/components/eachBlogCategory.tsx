import EachBlog from "./eachBlog"

export default function EachBlogCategory(category: allBlogs) {
    return <div>
        <div className="mb-5 text-lg sticky top-0 py-5 bg-[#0A0A0A] z-50 h-fit
        sm:text-xl">
            {category.category.toString()}
        </div>
        <div className="grid grid-cols-1 gap-y-5 gap-x-10 ml-1
        sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2
        sm:gap-y-12 md:gap-y-12 lg:gap-y-12 xl:gap-y-12
        sm:ml-6
        ">
            {
                category.blogs.map((content, index) => {
                    return <EachBlog key={index} {...content} />
                })
            }
        </div>
    </div>
}