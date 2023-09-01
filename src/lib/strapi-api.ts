export const fetcher = async (url: string, options = {}) => {
    try {
        const response: any = await fetch(url, options);

        // {
        //     ...options,
        //     headers: {
        //         Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        //     }
        // })

        if(response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.error(error);
        return error;
    }
}