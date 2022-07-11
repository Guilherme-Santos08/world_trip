import axios from 'axios'
import { env } from 'process'

var isDevelopment = process.env.NODE_ENV === 'development'

export const api = axios.create({
  baseURL: isDevelopment
    ? 'http://localhost:3000/api'
    : 'https://world-trip-coral.vercel.app/api',
  // baseURL: 'https://world-trip-coral.vercel.app/api',
})
