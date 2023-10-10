'use client';
import cx from "clsx";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMediaQuery } from "react-responsive";
import { memo, useEffect, useMemo, useState } from "react";

type HeaderElement = HTMLHeadingElement;

interface ListItem {
  element: HeaderElement;
  children: ListItem[];
}

export const Headlings = ({
  content, className
}: { content: string, className?: string }) => {
  const [filteredContent, setFilteredContent] = useState('');
  
  const isTabletAndDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const renderedContent = useMemo(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headers: HeaderElement[] = Array.from(doc.querySelectorAll('h1, h2, h3, h4'));

    if(headers) {
      const listItems = createListStructure(headers);
      const transformedContent = renderListStructure(listItems);
      return transformedContent;
    }
    return '';
  }, [content]);

  useEffect(() => {
    setFilteredContent(renderedContent);
  }, [renderedContent])

  if(!filteredContent) return <></>;
  return (
    <ScrollArea
      className={cx("prose prose-sm prose-li:list-none prose-a:no-underline hover:prose-a:text-[var(--link-color)] md:prose-ul:pl-0 lg:prose-ul:pl-3 flex flex-col mx-auto m-0 p-0 mt-.5 mb-5 md:mx-3 lg:mb-0 bg-[var(--white-blog)] ring-1 ring-zinc-950/10 relative", className)}
      style={{
        position: isTabletAndDesktop ? "sticky" : "static",
        top: isTabletAndDesktop ? "57px" : "0px"
      }}
    >
      <div className={"h-10 w-full p-2 text-sm uppercase bg-[var(--white-mediumn)] sticky top-0"}><strong>NESSE ARTIGO</strong></div>

      <div dangerouslySetInnerHTML={{ __html: filteredContent }} />
    </ScrollArea>
  )
}

function createListStructure(headers: Array<HeaderElement>): Array<ListItem> {
  const root: ListItem[] = [];
  const stack: ListItem[] = [];

  for (const header of headers) {
    const level = parseInt(header.tagName[1]);

    const item: ListItem = {
      element: header,
      children: [],
    };

    while (stack.length > 0 && stack[stack.length - 1].element.tagName !== `H${level - 1}`) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(item);
    } else {
      stack[stack.length - 1].children.push(item);
    }

    stack.push(item);
  }

  return root;
}

function renderListStructure(listItems: ListItem[]): string {
  return `<ul>${listItems.map((item) => 
    `<li>
      <a 
        href="#${item.element.id}"
      >
        ${item.element.innerHTML}
      </a>
      ${renderListStructure(item.children)}
    </li>`
  ).join('')}</ul>`;
}