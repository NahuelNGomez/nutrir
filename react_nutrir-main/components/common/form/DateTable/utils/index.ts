import { formatterReverseDate } from "../../../../surveys/steps/utils/formatterDate"

const rowFormatter = (encuestas: Array<{ comedor: number, fecha: string, funcionamiento: string }>) => {
  const servicioFormatter = (servicio: string) => {
    if (servicio) {
      const servicioFomatted = servicio.replace('_', ' ')
      return servicioFomatted
    }
  }

  const rows = encuestas?.map((e, index) => {

    return (
      {
        id: index + 1,
        date: formatterReverseDate(e.fecha),
        meal: servicioFormatter(e.funcionamiento),
        data: e
      }
    )
  })
  return rows
}

const columnFormatter = ()=>{
  
}

export {
  rowFormatter
}