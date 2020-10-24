import axios from 'axios'

export const tweetsAPI = {
    getTweet() {
        return axios.get('/tweets').then(response => response.data)
    },
}
