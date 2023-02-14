export const fetcher = async (url: string, options = {}) => {
    let response = await fetch(url, {
        ...options,
        headers: {
            Authorization: `Bearer ${process.env.API_STRAPI_TOKEN}`
        }
    })

    return await response.json();
}