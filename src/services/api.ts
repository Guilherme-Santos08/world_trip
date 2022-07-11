import axios from 'axios'

const URL = window.location.host
export const api = axios.create({
  baseURL: URL,
})
