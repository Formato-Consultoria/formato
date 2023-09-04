export default async function ArticlesPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });
  const articlesResponse = await response.json();
  
  const formattedJson = JSON.stringify(articlesResponse, null, 2);

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