import axios from "axios"

let api = axios.create({
  baseURL: "http://127.0.0.1:3000",
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api;