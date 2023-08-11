/* eslint-disable import/no-anonymous-default-export */
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigations";
import matter from "gray-matter";
import DynamicCircles from "../../components/dynamicCircles";
import ReactMarkdown from 'react-markdown';
import rehypeStringify from 'rehype-stringify';
import rehypeParse from 'rehype-parse';
import { rehype } from 'rehype';
import React from "react";
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import path from "path";

export default async function (param: any) {
    const fs = require('fs');
    // let pathMD = "blogs/" + param.params.title.toString().replace(/%20/g, " ") + ".md";
    let pathMD = path.join(process.cwd(), "public", "blogs", param.params.title.toString().replace(/%20/g, " ") + ".md");
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

        <div>
            <DynamicCircles />

            <div className="flex backdrop-blur-3xl ">

                <div className="flex w-full " suppressHydrationWarning >
                    <div className="w-full h-fit overflow-hidden pt-2 pb-4 px-5 bg-[#000000c0] opacity-80
                            z-40 mx-0 
                            sm:pt-10
                            sm:px-10
                            sm:w-full lg:w-6/12 xl:w-8/12 
                            sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto
                            shadow-xl
                        ">
                        <Navigation />

                        <div className="text-zinc-400 text-sm mb-5">
                            July 12, 2024
                        </div>

                        <ReactMarkdown className="text-white" >
                            {renderableDataString}
                        </ReactMarkdown>

                        <div className="h-52"></div>
                        <Footer />
                    </div>

                </div>

            </div>
        </div>


    )
}