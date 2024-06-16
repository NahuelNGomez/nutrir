import { ChartDataType, DataSet, DataSetReturned, RationDataType } from "../types"

const mealChartDataFormatter = (data: DataSet): ChartDataType => {

  const palette = ["#e6004980", "#0bb4ff80", "#50e99180", "#e6d80080", "#9b19f580", "#ffa30080", "#dc0ab480", "#b3d4ff80", "#00bfa080", "#b3000080", "#7c115880", "#4421af80", "#1a53ff80", "#0d88e680", "#00b7c780", "#5ad45a80", "#8be04e80", "#ebdc7880"
  ]

  const lista = [...data.lista]
  const labels = lista.map(el => el.label)
  const set = new Set(labels)
  const labelsByMealArray = Array.from(set)
  const colorCodes: any = {}
  let index = 0

  labelsByMealArray.forEach(element => {
    Object.defineProperty(colorCodes, element, { value: palette[index] })
    index++
  });


  const listaWithColorCodes = lista.map(el => {
    const key: string = el.label
    return {
      label: el.label,
      data: el.data,
      backgroundColor: colorCodes[key]
    }
  })

  const dataFormatted = {
    labels: data.labels,
    datasets: listaWithColorCodes,
  }

  return dataFormatted
}

const ratioChartDataFormatter = (data: RationDataType) => {

  const lista = [...data.lista]

  return {
    labels: lista.map(el => el.fecha),
    datasets: [{
      label: 'Raciones por día',
      data: lista.map(el => el.cantidad),
      backgroundColor: "#0bb4ff80",
    }]
  }
}

export {
  mealChartDataFormatter,
  ratioChartDataFormatter
}
