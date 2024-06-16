import { useAppCtx } from "../../../../src/contexts/store";
import { mealInit } from "../../../../src/contexts/constants/initInfo";

export default function useSurveyReset() {
  const {setSelectedSurvey, setGuestsAmount,setDrinkStep, setSimpleMainMealStep, setEntryStep, setCompoundMainMailStep, setDessertStep, setDisplaySideStepper, setStepActive  } = useAppCtx()

  setSelectedSurvey({ date: '', service: '' })
  setGuestsAmount({
    childs: 0,
    kids: 0,
    teens: 0,
    adults: 0
  })
  setDrinkStep(mealInit)
  setSimpleMainMealStep(mealInit)
  setEntryStep(mealInit)
  setCompoundMainMailStep(mealInit)
  setDessertStep(mealInit)
  setDisplaySideStepper(true)

}
