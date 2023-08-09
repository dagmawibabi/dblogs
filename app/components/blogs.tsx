import EachBlog from "./eachBlog";

export default function Blogs() {
    let latestBlogs: Array<blogIntro> = [
        {
            "date": "July 12, 2023",
            "title": "Sin",
            "description": "God is a loyal God. He is always faithful to his promises, even when we are not faithful to him. He loves us unconditionally and will never leave us or forsake us. We can always count on God to be there for us, no matter what.",
        },
        {
            "date": "July 12, 2023",
            "title": "The Faithfulness of God",
            "description": "God is a loyal God. He is always faithful to his promises, even when we are not faithful to him. He loves us unconditionally and will never leave us or forsake us. We can always count on God to be there for us, no matter what.",
        },
    ];

    let techBlogs: Array<blogIntro> = [
        {
            "date": "July 12, 2023",
            "title": "James Chapter 1",
            "description": "God is a loyal God. He is always faithful to his promises, even when we are not faithful to him. He loves us unconditionally and will never leave us or forsake us. We can always count on God to be there for us, no matter what.",
        },
        {
            "date": "July 12, 2023",
            "title": "The Faithfulness of God",
            "description": "God is a loyal God. He is always faithful to his promises, even when we are not faithful to him. He loves us unconditionally and will never leave us or forsake us. We can always count on God to be there for us, no matter what.",
        },
        {
            "date": "July 12, 2023",
            "title": "The Loyalty of God",
            "description": "God is a loyal God. He is always faithful to his promises, even when we are not faithful to him. He loves us unconditionally and will never leave us or forsake us. We can always count on God to be there for us, no matter what.",
        },
        {
            "date": "July 12, 2023",
            "title": "The Faithfulness of God",
            "description": "God is a loyal God. He is always faithful to his promises, even when we are not faithful to him. He loves us unconditionally and will never leave us or forsake us. We can always count on God to be there for us, no matter what.",
        },
    ];

    let spiritualBlogs: Array<blogIntro> = [
        {
            "date": "July 12, 2023",
            "title": "The Loyalty of God",
            "description": "God is a loyal God. He is always faithful to his promises, even when we are not faithful to him. He loves us unconditionally and will never leave us or forsake us. We can always count on God to be there for us, no matter what.",
        },
        {
            "date": "July 12, 2023",
            "title": "The Faithfulness of God",
            "description": "God is a loyal God. He is always faithful to his promises, even when we are not faithful to him. He loves us unconditionally and will never leave us or forsake us. We can always count on God to be there for us, no matter what.",
        },
        {
            "date": "July 12, 2023",
            "title": "The Loyalty of God",
            "description": "God is a loyal God. He is always faithful to his promises, even when we are not faithful to him. He loves us unconditionally and will never leave us or forsake us. We can always count on God to be there for us, no matter what.",
        },
        {
            "date": "July 12, 2023",
            "title": "The Faithfulness of God",
            "description": "God is a loyal God. He is always faithful to his promises, even when we are not faithful to him. He loves us unconditionally and will never leave us or forsake us. We can always count on God to be there for us, no matter what.",
        },
    ]

    return (
        <div className="my-10">

            {/* Latest Blog */}
            <div className="mb-5 text-xl sticky top-0 py-5 bg-[#0A0A0A] z-50">
                Latest Blogs
            </div>
            <div className="grid grid-cols-2 gap-y-12 gap-x-10 ml-6">
                {
                    latestBlogs.map((content, index) => {
                        return <EachBlog key={index} {...content} />
                    })
                }
            </div>

            {/* Spiritual Blogs */}
            <div className="mb-5 text-xl sticky top-16 py-5 bg-[#0A0A0A] z-50">
                Spiritual Blogs
            </div>
            <div className="grid grid-cols-2 gap-y-12 gap-x-10 ml-6">
                {
                    spiritualBlogs.map((content, index) => {
                        return <EachBlog key={index} {...content} />
                    })
                }
            </div>

            {/* Tech Blogs */}
            <div className="mb-5 text-xl sticky top-16 py-5 bg-[#0A0A0A] z-50">
                Tech Blogs
            </div>
            <div className="grid grid-cols-2 gap-y-12 gap-x-10 ml-6">
                {
                    techBlogs.map((content, index) => {
                        return <EachBlog key={index} {...content} />
                    })
                }
            </div>


        </div>
    )
}