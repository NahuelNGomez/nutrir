import { useAppCtx } from "../../src/contexts/store" 
import { userAndComedorDetailType } from "./types"

const useUserTokenAndComedorFetchDetail = ():userAndComedorDetailType => {
  const {user, comedorSeleccionado} = useAppCtx()
  const userTokenAndComedorDetails = {
    token: user.access_token,
    comedorId: comedorSeleccionado.id
  }

  return userTokenAndComedorDetails
}

export {
  useUserTokenAndComedorFetchDetail
}