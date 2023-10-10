import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code';

export const mdToHtml = async (markdown: string): Promise<string> => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "before" })
    // .use(rehypePrettyCode, {
    //   theme: 'github-dark'
    // })
    .use(rehypeStringify)
    .process(markdown);
    
  return result.toString();
}