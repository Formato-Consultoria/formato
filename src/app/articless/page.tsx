import { fetcher } from "@/lib/strapi-api";

export default async function ArticlesPage() {
    // const articlesResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&sort[0]=id:desc&pagination[page]=1&pagination[pageSize]=3`);
    const articlesResponse = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=deep&sort[0]=id:desc&pagination[page]=1&pagination[pageSize]=3`);
    const formattedJson = JSON.stringify(articlesResponse, null, 2)

    return (
        <div>
      <pre>
        {formattedJson.split('\n').map((line, index) => (
          <div key={index}>
            {line.startsWith('  ') ? (
              <>
                <strong>{line.substring(0, line.indexOf(':') + 1)}</strong>
                <span>{line.substring(line.indexOf(':') + 1)}</span>
              </>
            ) : (
              line
            )}
          </div>
        ))}
      </pre>
    </div>

    )
}