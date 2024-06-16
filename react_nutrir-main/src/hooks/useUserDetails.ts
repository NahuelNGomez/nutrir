import { useAppCtx } from "../contexts/store"

const useUserDetails = ()=>{
  const {user} = useAppCtx()
  return user
}

export {
  useUserDetails
}