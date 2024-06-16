import axios from "axios";
import { useUserDetails } from "../hooks/useUserDetails";

const API_BASE_PATH = process.env.NEXT_PUBLIC_API_BASE_URL


const axiosTokenized = axios.create({ baseURL: API_BASE_PATH })
const axiosUntokenized = axios.create({ baseURL: API_BASE_PATH })
const axiosInstance = axios.create({ baseURL: API_BASE_PATH })

// const tokenProvider = ()=>{
  // const { access_token: token } = useUserDetails()
// }

// axiosTokenized.interceptors.request.use((request) => {
  // request.headers.Authorization = 'Bearer ' + token
  // return request
// })

export {
  axiosTokenized,
  axiosUntokenized,
  axiosInstance
}