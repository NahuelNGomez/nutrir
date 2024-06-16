import axios from "axios"
import { Dispatch, SetStateAction } from "react"

export const bebidasDataFetch = async(
  accessToken: string,
  setModalLogin: Dispatch<SetStateAction<boolean>>
) => {
  axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}comida/servicio/cena`,
    { headers: { Authorization: `Bearer ${accessToken}` } })
    .then(res => {
      if (res.status === 401) {
        setModalLogin(true)
      } else {
        const data = res.data.data["plato principal"]
        const dataComidas = data.map(async (comida: any) => {
          try {
            const info = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}comida/${comida.id}`,
              { headers: { Authorization: `Bearer ${accessToken}` } })
            return info
          } catch (error) {
            console.log('comida data error', error);
          }
        })

        const promisesFormatted = async () => {
          try {
            const promises = await Promise.all(dataComidas)
            const res = promises.map((e) => e.data.data)
            return res
          } catch (error) {
            console.log('promesas catch', error)
          }
        }
        promisesFormatted()
      }
    })
    .catch(err => {
      if (err.response.status === 401) {
        setModalLogin(true)
      }
    })
}

