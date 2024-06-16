import axios from "axios"
import { ChartsTypes, statsDataFetchType } from "./types"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
const rationPerWeekPath = `${baseUrl}reporte/racion_semana/`
const rationPerMothPath = `${baseUrl}reporte/racion_mes/`
const mealPerWeekPath = `${baseUrl}reporte/comida_semana/`
const mealPerMothPath = `${baseUrl}reporte/comida_mes/`

const baseFetch = (path: string, headers: {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios(path, headers)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}

const rationPerWeekDataFetch = (comedorId: number, headers: {}) => {
  const path = `${rationPerWeekPath}${comedorId}`
  return baseFetch(path, headers)
}

const rationPerMothDataFetch = (comedorId: number, headers: {}) => {
  const path = `${rationPerMothPath}${comedorId}`
  return baseFetch(path, headers)
}

const mealsPerWeekDataFetch = (comedorId: number, headers: {}) => {
  const path = `${mealPerWeekPath}${comedorId}`
  return baseFetch(path, headers)
}

const mealsPerMothDataFetch = (comedorId: number, headers: {}) => {
  const path = `${mealPerMothPath}${comedorId}`
  return baseFetch(path, headers)
}


const statsDataFetch = (statsDataFetch: statsDataFetchType): Promise<any> => {

  const { token, comedorId } = statsDataFetch.userTokenAndComedorDetails
  const fetchType = statsDataFetch.fetchType
  const headers = { headers: { Authorization: `Bearer ${token}` } }

  if (fetchType === ChartsTypes.RacionesSemana) return rationPerWeekDataFetch(comedorId, headers)
  if (fetchType === ChartsTypes.RacionesMes) return rationPerMothDataFetch(comedorId, headers)
  if (fetchType === ChartsTypes.ComidaSemana) return mealsPerWeekDataFetch(comedorId, headers)
  if (fetchType === ChartsTypes.ComidasMes) return mealsPerMothDataFetch(comedorId, headers)
  return new Promise((resolve, reject) => { resolve('Error') })
}

export {
  statsDataFetch
}