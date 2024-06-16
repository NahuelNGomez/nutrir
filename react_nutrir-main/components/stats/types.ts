export enum ChartsTypes {
  RacionesSemana = 'RacionesSemana',
  RacionesMes = 'RacionesMes',
  ComidaSemana = 'ComidaSemana',
  ComidasMes = 'ComidasMes',
}

export type MealListElement = {
  label: string,
  data: Array<number>
}

export type RationListElement = {
  fecha: string,
  cantidad: number
}

export type DataSet = {
  comedor: string,
  labels: Array<string>,
  lista: Array<MealListElement>
}

export type RationDataType = {
  comedor: string,
  lista: Array<RationListElement>
}

export type DataSetReturned = {
  label: string,
  data: Array<number>,
  backgroundColor: string
}

export type ChartDataType = {
  labels: string[];
  datasets: MealListElement[];
}


// fetch
export type ListaFetchedType = {
  fecha: string, 
  cantidad: number
}

export type ChartDataFetchedType = {
  comedor: number,
  lista: Array<ListaFetchedType>
}

export type userTokenAndComedorDetailsType = {
  token: string,
  comedorId: number
}

export type statsDataFetchType = {
  userTokenAndComedorDetails: userTokenAndComedorDetailsType,
  fetchType: ChartsTypes
}


// Hooks
export type userAndComedorDetailType = {
  token: string,
  comedorId: number
}