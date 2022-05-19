import axios from 'axios'

const API_URL = '/api/message'

// Post Message
const setMessage = async (messageData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, messageData, config)

    return response.data
}

// Get Message
const getMessage = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

const messageService = {
    setMessage,
    getMessage
}

export default messageService