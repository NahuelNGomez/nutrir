import moment from "moment";

enum formatType {
  YYYYMMDD = "YYYY-MM-DD",
  DDMMYYY = "LUNCH",
}
export type suerveyInfoType = {
  format: keyof typeof formatType;
}


function currentDay(format: string) {
  let currentDay: string = ''
  if (format === 'YYYY-MM-DD') {
    currentDay = moment().format('YYYY MM DD').replaceAll(' ', '-')
  }
  if(format === 'DD-MM-YYYY'){
    currentDay = moment().format('DD MM YYYY').replaceAll(' ', '-')
  }
  return currentDay
}

export default currentDay