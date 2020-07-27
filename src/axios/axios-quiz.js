import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-561e0.firebaseio.com/'
})