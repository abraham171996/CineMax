import axios from 'axios'

const HTTP = axios.create({
    baseURL: import.meta.env.VITE_MOVIE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export const getApiData = (url) => {
    return HTTP.get(url)
}
