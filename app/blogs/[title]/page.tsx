'use client';
import {remark} from 'remark'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import html from 'remark-html';

export default async function (blog:any) {
    // {decodeURI(blog.params.title)}
    let file = await fetch("https://raw.githubusercontent.com/dagmawibabi/dblogs/main/public/blogs/Sin.md")
    console.log(file)

    const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkToc)
    .use(html)
    .process('# Hi\n\n## Table of contents\n\n## Hello\n\n*Some* ~more~ _things_.');
    const contentHtml = processedContent.toString();

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    )
}