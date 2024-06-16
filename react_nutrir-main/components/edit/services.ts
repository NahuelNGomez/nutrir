import { apiProvider } from "../../src/dataFetch/provider";

const comedorDataFetch = (token: string, comedorId: number): Promise<any> => {
  const path =  `comedor/${comedorId}`
  return apiProvider.get(path, token)
}

const weekServicesFetch = (token: string, comedorId: number): Promise<any> => {
  const path = `comedor/${comedorId}/funcionamiento/`
  return apiProvider.get(path, token)
}


export {
  comedorDataFetch,
  weekServicesFetch
}