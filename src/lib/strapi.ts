export const fetcher = async (url: string, options = {}) => {
    let response: any;

    if(!options) {
        response = await fetch(url);
    } else {
        response = await fetch(url, options);
    }

    const data = await response.json();
    return data;
}