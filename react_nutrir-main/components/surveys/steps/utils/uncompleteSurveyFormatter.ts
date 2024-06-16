import { postFormatterDate } from "./formatterDate"

type uncompletedPostType = {
  fecha: string;
  funcionamiento: string;
  comedor: number
}

const uncompletedSurveyFormatter = (date: string, servicio: string, comedorId: number): uncompletedPostType => {
  const dateFormatted = postFormatterDate(date)
  return {
    fecha: dateFormatted,
    funcionamiento: servicio,
    comedor: comedorId
  }
}

export {
  uncompletedSurveyFormatter
}