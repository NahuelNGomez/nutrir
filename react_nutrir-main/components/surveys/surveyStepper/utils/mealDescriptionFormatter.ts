import { mealStepType } from "../../../../src/types/global"

const mealDescriptionFormatter = (mealData: mealStepType) => {
  if (mealData.nombre === '') {
    return ''
  }
  if (mealData.alimento.length === 0) {
    return mealData.nombre
  }
  if (mealData.alimento.length) {
    const simpleMealDescriptions = mealData.alimento.map(meal => meal.nombre)
    return simpleMealDescriptions.join(', ')
  }
  return ''
}

export default mealDescriptionFormatter