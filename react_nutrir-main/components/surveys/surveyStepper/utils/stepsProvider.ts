
const simpleSurveySteps = (
  serviceDescription: string, 
  guestsDescription: number | string, 
  drinksDecription: string, 
  simpleMainMealDescription: string) => {
  return (
    [
      {
        label: '1. Tipo de comida',
        description: serviceDescription || ''
      },
      {
        label: '2. Cantidad de comenzales',
        description: guestsDescription
      },
      {
        label: '3. Bebida',
        description: drinksDecription,
      },
      {
        label: '4. Comida',
        description: simpleMainMealDescription 
      },
      {
        label: '5. Confirmar encuesta',
        description: ``,
      },
    ]
  )
}

const compoundSurveySteps = (
  serviceDescription: string, 
  guestsDescription: number | string,
  entryDescription: string, 
  compoundMainMealDescription: string,
  dessertStep: string,
  ) => {
  return (
    [
      {
        label: '1. Tipo de comida',
        description: serviceDescription || ''
      },
      {
        label: '2. Cantidad de comenzales',
        description: guestsDescription
      },
      {
        label: '3. Entrada',
        description: entryDescription
      },
      {
        label: '4. Plato Principal',
        description: compoundMainMealDescription
      },
      {
        label: '5. Postre',
        description: dessertStep
      },
      {
        label: '6. Confirmar encuesta',
        description: ``,
      },
    ]
  )
}


const stepsProvider = (
  serviceDescription: string, 
  guestsDescription: number | string,
  drinksDecription: string,
  simpleMainMealDescription: string,
  entryDescription: string,
  compoundMainMealDescription: string,
  dessertStep: string,
  )
  : Array<{ label: string, description: string | number }> => {

  switch (serviceDescription) {
    case 'desayuno':
      return simpleSurveySteps(serviceDescription, guestsDescription, drinksDecription, simpleMainMealDescription)
      break;
    case 'almuerzo':
      return compoundSurveySteps(serviceDescription, guestsDescription, entryDescription, compoundMainMealDescription, dessertStep)
      break;
    case 'merienda':
      return simpleSurveySteps(serviceDescription, guestsDescription, drinksDecription, simpleMainMealDescription)
      break;
    case 'cena':
      return compoundSurveySteps(serviceDescription, guestsDescription, entryDescription, compoundMainMealDescription, dessertStep)
      break;
    case 'Olla Popular':
      return compoundSurveySteps(serviceDescription, guestsDescription, entryDescription, compoundMainMealDescription, dessertStep)
      break;
    default:
      return simpleSurveySteps(serviceDescription, guestsDescription, drinksDecription, simpleMainMealDescription)
      break;
  }
}

export default stepsProvider