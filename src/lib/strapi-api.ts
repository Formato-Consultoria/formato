export const fetcher = async (url: string, options = {}) => {
    // try {
        const response: any = await fetch(url, {
            ...options,
            headers: {
                Authorization: `Bearer ${process.env.API_STRAPI_TOKEN}`,
                'Content-Type': 'application/json'
            }
        })

        if(response.ok) {
            return await response.json()
        }
    // } catch (error) {
    //     return error;
    // }
}