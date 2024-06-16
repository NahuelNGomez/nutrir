import { apiProvider } from "../../src/dataFetch/provider";
import currentDay from "../../src/utils/currentDate";
import { postFormatterDate } from "./steps/utils/formatterDate";


const owedMonthlySurveysFetch = (token: string, id: number): Promise<any> => {
  const path = `encuesta/incompletas/${id}/${currentDay('YYYY-MM-DD')}`
  return apiProvider.get(path, token)
}

const surveyPost = (body: {}, token: string): Promise<any> => {
  const path = 'encuesta/'
  return apiProvider.post(path, body, token)
}

const uncompletedSurveyPost = (body: {}, token: string): Promise<any> => {
  const path = 'encuesta/no_se_sirvio/'
  return apiProvider.post(path, body, token)
}

const searchSurveysByDayFetch = (date: string, comedorId: number, token: string): Promise<any> => {
  const dateFormatted = postFormatterDate(date)
  const path = `encuesta/incompletas_dia/${comedorId}/${dateFormatted}`
  return apiProvider.get(path, token)
}

export {
  owedMonthlySurveysFetch,
  surveyPost,
  uncompletedSurveyPost,
  searchSurveysByDayFetch
}