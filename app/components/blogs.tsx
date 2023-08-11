import EachBlogCategory from "./eachBlogCategory";
import configJSON from "../../public/config.json";

export default async function Blogs() {
    let allBlogs = configJSON.blogs;

    return (
        <div className="mb-10">
            {
                allBlogs.map((content, index) => {
                    return <EachBlogCategory key={index} {...content} />
                })
            }
        </div>
    )
}