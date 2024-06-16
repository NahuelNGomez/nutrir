import { axiosInstance } from "./axios"

const get = (path: string, token: string): Promise<any> => {
  const headers = { headers: { Authorization: `Bearer ${token}` } }

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance(path, headers)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}

const post = (path: string, body: {}, token: string,): Promise<any> => {
  const headers = { headers: { Authorization: `Bearer ${token}` } }

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance.post(path, body, headers)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}

const apiProvider = {
  get,
  post
}

export {
  apiProvider
}