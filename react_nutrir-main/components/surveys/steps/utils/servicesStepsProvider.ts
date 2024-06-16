import GuestsStep from "../GuestsStep"
import DrinksStep from "../DrinksStep"
import SimpleMainMealStep from "../SimpleMainMealStep"
import SubmitStep from "../SubmitStep"
import EntryDishStep from "../EntryDishStep"
import CompoundMainDishStep from "../CompoundMainDishStep"
import DessertDishStep from "../DessertDishStep"

const simpleDish = [
  {
    title: '2. ¿Cuántos comenzales tienes?',
    subtitle: 'Indica según el rango etáreo la cantidad de comenzales que tienes.',
    content: GuestsStep
  },
  {
    title: '3. ¿Qué bebida sirvieron?',
    subtitle: 'Selecciona el tipo de bebida y los componentes que la integran.',
    content: DrinksStep
  },
  {
    title: '4. ¿Qué comida sirvieron?',
    subtitle: 'Selecciona el tipo de comida y los componentes que la integran si es que se necesitan.',
    content: SimpleMainMealStep
  },
  {
    title: '',
    subtitle: '',
    content: SubmitStep
  },
]

const compoundDish = [
  {
    title: '2. ¿Cuántos comenzales tienes?',
    subtitle: 'Indica según el rango etáreo la cantidad de comenzales que tienes.',
    content: GuestsStep
  },
  {
    title: '3. ¿Qué entrada sirvieron?',
    subtitle: 'Selecciona el tipo de entrada y los componentes que la integran si es que se necesitan.',
    content: EntryDishStep
  },
  {
    title: '4. ¿Qué plato principal sirvieron?',
    subtitle: 'Selecciona el tipo de plato principal y los componentes que la integran si es que se necesitan.',
    content: CompoundMainDishStep
  },
  {
    title: '5. ¿Qué postre sirvieron?',
    subtitle: 'Selecciona el tipo de postre y los componentes que la integran si es que se necesitan.',
    content: DessertDishStep
  },
  {
    title: '',
    subtitle: '',
    content: SubmitStep
  },
]


const breakfastSteps: Array<any> = simpleDish

const lunchSteps: Array<any> = compoundDish

const meriendaSteps: Array<any> = simpleDish

const dinnerSteps: Array<any> = compoundDish

const ollaPopularSteps: Array<any> = compoundDish


const servicesStepsProvider = (surveyType: string): Array<any> => {

  switch (surveyType) {
    case 'desayuno':
      return breakfastSteps
      break;
    case 'almuerzo':
      return lunchSteps
      break;
    case 'merienda':
      return meriendaSteps
      break;
    case 'cena':
      return dinnerSteps
      break;
    case 'Olla Popular':
      return ollaPopularSteps
      break;
    default:
      return lunchSteps
      break;
  }
}


export default servicesStepsProvider