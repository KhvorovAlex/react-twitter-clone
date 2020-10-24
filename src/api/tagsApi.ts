import axios from 'axios'

export const tagsAPI = {
    getTags() {
        return axios.get('/tags').then(response => response.data)
    },
}
