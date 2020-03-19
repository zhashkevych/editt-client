const apiUrl = process.env.VUE_APP_API_URL;

export const api = (path, ...rest) => fetch(`${apiUrl}/${path}`, ...rest);
