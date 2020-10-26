import axios from 'axios'

export const tweetsAPI = {
    getTweets() {
        return axios.get('/tweets').then(response => response.data)
    },

    getTweet(id: any) {
        return axios.get(`/tweets?_id=${id}`).then(response => response.data)
    },
}
