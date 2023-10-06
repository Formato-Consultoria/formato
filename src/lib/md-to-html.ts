import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify';

export const mdToHtml = async (markdown: string): Promise<string> => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown);
    
  return result.toString();
}