import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigations";
import matter from "gray-matter";
import ReactMarkdown from 'react-markdown';
import rehypeStringify from 'rehype-stringify';
import rehypeParse from 'rehype-parse';
import { rehype } from 'rehype';
import React from "react";
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';

export default async function (param: any) {
    const fs = require('fs');
    let pathMD = "public/blogs/" + param.params.title.toString().replace(/%20/g, " ") + ".md";
    const dataMD = await fs.readFileSync(pathMD, { encoding: 'utf8' });
    let resultMD = matter(dataMD);

    const renderableData = await rehype()
        // .use(rehypeToc)
        // .use(rehypeRemark)
        .use(rehypeParse)
        .use(rehypeStringify)
        .use(rehypeSanitize)
        .use(rehypeHighlight)
        // .use(rehypeRewrite)
        // .use(rehypeAccessibleEmojis)
        // .use(rehypeRemark)
        .process(resultMD.content);

    const renderableDataString = renderableData.value.toString();

    return (
        <div className="flex bg-[#0A0A0A] " suppressHydrationWarning >
            <div className="
        bg-[#0A0A0A] blur-3xl absolute top-0 left-0 w-fit hidden 
          sm:w-fit md:w-fit lg:w-fit xl:w-fit
          sm:hidden md:hidden lg:block xl:block
        ">
                <div className="sticky top-0 m-10 w-80 h-80 bg-red-500 opacity-70 rounded-full"></div>
            </div>

            {/* <div className="w-6/12 mx-auto h-fit overflow-hidden pt-10 pb-4 px-10 bg-[#0A0A0A] z-40"> */}
            <div className="w-full h-fit overflow-hidden pt-2 pb-4 px-5 bg-[#0A0A0A] z-40 mx-0 
                sm:pt-10
                sm:px-10
                sm:w-full lg:w-6/12 xl:w-6/12 
                sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto
            ">
                <Navigation />

                {/* DATE */}
                <div className="text-zinc-400 text-sm mb-5">
                    July 12, 2024
                </div>

                {/* BLOG TITLE */}
                <div className="
                    text-white text-xl font-bold mb-5
                    sm:text-2xl
                ">
                    {param.params.title.toString().replace(/%20/g, " ")}
                </div>

                {/* CONTENT */}
                <ReactMarkdown className="text-white" >
                    {renderableDataString}
                </ReactMarkdown>

                <div className="h-52"></div>
                <Footer />
            </div>

            <div className="
                bg-[#0A0A0A] blur-3xl absolute bottom-0 right-0 w-fit hidden 
                sm:hidden md:hidden lg:block xl:block
            ">
                <div className=" m-10 w-80 h-80 bg-blue-500 opacity-70 rounded-full"></div>
            </div>

        </div>
    )
}