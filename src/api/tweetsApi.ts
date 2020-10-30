import axios from 'axios'
import { Tweet } from '../store/ducks/tweets/contracts/state'

export const tweetsAPI = {
    getTweets(): Promise<Tweet[]> {
        return axios.get('/tweets?_sort=id&_order=desc').then(response => response.data)
    },

    fetchTweet(id: string): Promise<Tweet> {
        return axios.get('/tweets?_id=' + id).then(response => response.data)
    },

    fetchAddTweet(data: Tweet): Promise<Tweet> {
        return axios.post('/tweets', data).then(response => response.data)
    },
}
