// "use client";
// "use server";

import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigations";
import matter from "gray-matter";
import Markdown from 'markdown-to-jsx'
import ReactMarkdown from 'react-markdown';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkHtml from "remark-html";
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkBehead from "remark-behead";
import remarkBreaks from "remark-breaks";
import remarkMdx from "remark-mdx";
import rehypeStringify from 'rehype-stringify';
import mdx from "remark-mdx";
import { MDXProvider } from '@mdx-js/react';
// import a11yEmoji from '@fec/remark-a11y-emoji';

export default async function (param: any) {
    const fs = require('fs');

    let pathMD = "public/blogs/" + param.params.title.toString().replace(/%20/g, " ") + ".md";
    let pathHTML = "public/blogs/" + param.params.title.toString().replace(/%20/g, " ") + ".html";

    const dataMD = await fs.readFileSync(pathMD, { encoding: 'utf8' });
    const dataHTML = await fs.readFileSync(pathHTML, { encoding: 'utf8' });

    let resultMD = matter(dataMD);
    let resultHTML = matter(dataHTML);

    const renderableData = await remark()
        .use(remarkGfm)
        .use(remarkToc)
        // .use(remarkBehead)
        // .use(remarkBreaks)
        // .use(remarkMdx)
        // .use(remarkHtml)
        // .use(remarkRehype)
        .process(resultMD.content);
    const renderableDataString = renderableData.value.toString();

    const processedContent = await remark().use(mdx).process(dataMD);
    const contentHtml = processedContent.toString();

    return (
        <div className="flex bg-[#0A0A0A] " suppressHydrationWarning >
            <div className="bg-[#0A0A0A] w-fit blur-3xl absolute top-0 left-0 ">
                <div className="sticky top-0 m-10 w-80 h-80 bg-red-500 opacity-70 rounded-full"></div>
            </div>

            <div className="w-6/12 mx-auto h-fit overflow-hidden pt-10 pb-4 px-10 bg-[#0A0A0A] z-40">
                <Navigation />
                {/* DATE */}
                <div className="text-zinc-400 text-sm mb-5">
                    July 12, 2024
                </div>

                {/* BLOG TITLE */}
                <div className="text-white text-2xl font-bold mb-5">
                    {param.params.title.toString().replace(/%20/g, " ")}
                </div>

                {/* <div className="h-screen text-white bg-white">
                    <iframe src="./James Chapter 1.html" className="h-screen text-white bg-[#0A0A0A] px-10" width={"100%"} ></iframe>
                </div> */}

                {/* <div dangerouslySetInnerHTML={{ __html: file.value }} /> */}

                {/* <div className="h-screen w-full text-white pb-96" >
                    { renderableData.value }
                </div> */}

                <ReactMarkdown className="text-white" remarkPlugins={[remarkGfm, remarkToc]}>
                    {renderableDataString}
                </ReactMarkdown>

                <div className="h-52"></div>
                <Footer />
            </div>

            <div className="bg-[#0A0A0A] w-fit blur-3xl absolute bottom-0 right-0">
                <div className=" m-10 w-80 h-80 bg-blue-500 opacity-70 rounded-full"></div>
            </div>

        </div>
    )
}