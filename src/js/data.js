import { BACKEND_URL } from './config'
import { showToast } from './custom'
import axios from 'axios'
import { JWT_COOKIE_EXPIRES_IN } from './config'
import { async } from 'regenerator-runtime'

export const getAllWordByCurrentUser = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${BACKEND_URL}words`,
            headers: {
                'authorization': `Bearer ${document.cookie.split('=')[1]}`
            }
        })
        return res.data.data.words
    } catch (err) {
        throw err.response.data.message
    }
}

export const getAllGames = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: `${BACKEND_URL}games`,
            // headers: {
            //     'authorization': `Bearer ${document.cookie.split('=')[1]}`
            // }
        })
        return res.data.data.games
    } catch (err) {
        throw err.response.data.message
    }
}

export const addWord = async (data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `${BACKEND_URL}words`,
            headers: {
                'authorization': `Bearer ${document.cookie.split('=')[1]}`
            },
            data
        })
        if (res.data.status === "success") {
            return
        }
    } catch (err) {
        throw err.response.data.message
    }
}