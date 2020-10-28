import axios from 'axios'
import { Tweet } from '../store/ducks/tweets/contracts/state'

export const tweetsAPI = {
    getTweets() {
        return axios.get('/tweets').then(response => response.data)
    },

    getTweet(id: any) {
        return axios.get(`/tweets?_id=${id}`).then(response => response.data)
    },

    fetchAddTweet(data: Tweet): Promise<Tweet> {
        return axios.post(`/tweets`, data).then(response => response.data)
    },
}
