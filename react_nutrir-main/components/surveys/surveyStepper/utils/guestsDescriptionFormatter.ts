import { guestType } from "../../../../src/types/global"

const guestsDescriptionFormatter = (guestsAmount: guestType)=>{

  const amount = guestsAmount.childs + guestsAmount.kids + guestsAmount.teens + guestsAmount.adults
  if(amount === 0 ) return ''
  if(amount > 0 ) return amount
  return ''
}

export default guestsDescriptionFormatter