import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://trycode.pw/c/7X9UN.json',
})

export const tweetsAPI = {
    getTweet() {
        return instance.get('/').then(response => response.data)
    },
}
