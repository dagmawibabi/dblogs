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
import mdx from "remark-mdx";
import { MDXProvider } from '@mdx-js/react';
import remark2rehype from 'remark-rehype';
import remarkStringify from 'remark-stringify';
import remarkHeadingGap from 'remark-heading-gap';

import rehypeStringify from 'rehype-stringify';
import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
// import rehypeFigure from "rehype-figure";
import rehypeToc from '@jsdevtools/rehype-toc';
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
// import remarkCitation from 'rehype-citation';
import rehypeRewrite from 'rehype-rewrite';
import { rehype } from 'rehype';
import rehypeReact from 'rehype-react';
import React from "react";
import rehypeSanitize from 'rehype-sanitize';
import path from "path";
import rehypeHighlight from 'rehype-highlight';
// import addClasses from 'rehype-add-classes';
import Markdoc from '@markdoc/markdoc';
// let addClasses = require('rehype-add-classes');

export default async function (param: any) {
    const fs = require('fs');
    // let addClasses = require('rehype-add-classes');
    let pathMD = "public/blogs/" + param.params.title.toString().replace(/%20/g, " ") + ".md";
    let pathHTML = "public/blogs/" + param.params.title.toString().replace(/%20/g, " ") + ".html";
    // console.log(pathMD)

    const dataMD = await fs.readFileSync(pathMD, { encoding: 'utf8' });
    const dataHTML = await fs.readFileSync(pathHTML, { encoding: 'utf8' });

    let resultMD = matter(dataMD);
    let resultHTML = matter(dataHTML);

    const renderableDataMDX = await remark()
        // .use(remarkParse)
        // .use(remarkGfm)
        // .use(remarkToc)
        // .use(remarkBehead)
        // .use(remarkBreaks)
        // .use(rehypeToc)
        // .use(remarkMdx)
        // .use(remarkHeadingGap)
        // .use(remarkHtml)
        // .use(remarkStringify)

        // .use(remarkRehype)
        // .use(remark2rehype)
        // .use(rehypeRemark)
        // .use(rehypeParse)
        .use(rehypeRewrite)
        .process(resultMD.content);

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

    const renderableDataMD = await remark()
        .use(rehypeRemark)
        .process(renderableData);


    const processedContent = await remark().use(mdx).process(dataMD);
    const contentHtml = processedContent.toString();

    const ast = Markdoc.parse(dataMD);
    const content = Markdoc.transform(ast);

    // console.log(ast);

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
                {/* <div>
                    {renderableDataString.toString()}
                </div> */}

                {/* <div dangerouslySetInnerHTML={{ __html: dataHTML }} /> */}

                {/* <div className="h-screen w-full text-white pb-96" >
                    {renderableData.value}
                </div> */}

                {/* <ReactMarkdown className="text-white" remarkPlugins={[remarkBreaks, remarkBehead, remarkGfm]} rehypePlugins={[rehypeParse]} >
                    {renderableDataString}
                </ReactMarkdown> */}
                <ReactMarkdown className="text-white" >
                    {renderableDataString}
                </ReactMarkdown>

                {/* {
                    Markdoc.renderers.react(content, React)
                } */}

                <div className="h-52"></div>
                <Footer />
            </div>

            <div className="bg-[#0A0A0A] w-fit blur-3xl absolute bottom-0 right-0">
                <div className=" m-10 w-80 h-80 bg-blue-500 opacity-70 rounded-full"></div>
            </div>

        </div>
    )
}