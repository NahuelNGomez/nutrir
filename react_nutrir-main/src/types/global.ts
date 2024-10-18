import { Theme } from "@mui/material";
import { darkTheme, lightTheme } from "../template/theme";

export type userType = {
  first_name: string;
  last_name: string;
  telefono: string;
  email: string;
  cuil: number;
  comedor: string;
  logged: boolean;
  access_token: string;
  refresh_token: string;
  pk: number;
  groups: [];
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export enum surveyTypes {
  CURRENT = "current",
  SPECIAL = "special",
}

export enum dishesOptionsType {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  MERIENDA = "MERIENDA",
  OLLAPOPULAR = "OLLAPOPULAR",
}

export type dishestype = {
  type: keyof typeof dishesOptionsType;
  name: string;
  description?: string;
  picture?: string;
  ingredients: Array<{ name: string; description: string }>;
};

export type dishesCardType = {
  name: string;
  type: "BREAKFAST" | "LUNCH" | "DINNER" | "MERIENDA" | "OLLAPOPULAR";
  complete: boolean;
  available: boolean;
}

export type guestType = {
  childs: number;
  kids: number;
  teens: number;
  adults: number
}

export type invoiceInfoType = {
  type?: keyof typeof surveyTypes;
  dishes?: Array<dishestype>;
  adults?: Array<guestType>;
};

export type surveyType = {
  comedor: number;
  funcionamiento: string;
  fecha: string;
}

export type serviciosType = {
  descripcion: string;
  calle: string;
  numero: string;
  entre_calles: string;
}

export type serviciosDiaType = {
  comedor: number;
  dia: string;
  funcionamientos: Array<string>
}

export type serviceByDayTipe = {
  name: string,
  keyInfo: string,
}


export type comedorInfoType = {
  actividades?: Array<number>;
  activo?: boolean;
  asistentes_diarios?: number;
  barrio?: string;
  calle?: string;
  cantidad_trabajadores?: number;
  departamento?: number;
  descripcion?: string;
  entre_calles?: string;
  fecha_inicio_actividad?: string;
  fuente_agua?: number;
  fuente_agua_potable?: boolean;
  gobierno_local?: number;
  id: number;
  localidad?: number;
  latitud?: string;
  longitud?: string;
  nombre: string;
  numero?: number;
  organizacion_regional?: number;
  provincia?: number;
  responsable_comedor?: number;
  servicio_comedor?: number;
  tipos_energia?: number;
  ubicacion_georreferencial?: string;
  selected?: boolean;
}

// Steps

// Step 0: date & service type - selected survey to complete

export type selectedSurveyType = {
  date: string;
  service: string;
}

// Step 1: guests

export type guestsStepsType = {
  childs: number;
  kids: number;
  teens: number;
  adults: number;
}

// Step 2: drink
export type Unidades = {
  id: number;
  nombre: string;
}

export type mealDataType = {
  id: number;
  nombre: string;
  foto: string;
  horario?: string;
  unidades?: Array<Unidades>;
  cantidad_porcion?: string | number;
  hidratos_carbono?: string | number;
  proteinas?: string | number;
  grasas?: string | number;
  energia?: string | number;
  alimento: Array<foodDataType>;
}

export type foodDataType = {
  id: number;
  nombre: string;
  foto: string;
  unidades?: Array<Unidades>;
  cantidad_porcion?: string | number;
  hidratos_carbono?: string | number;
  proteinas?: string | number;
  grasas?: string | number;
  energia?: string | number;
}

export type foodStepType = {
  id: number;
  nombre: string;
  quantity: number;
  unit: string;
}

export type mealStepType = {
  comida: number | null;
  nombre: string;
  alimento: Array<foodStepType>;
}


export type storeType = {
  comedoresDisponibles: Array<any>;
  comedorSeleccionado: comedorInfoType;
  currentTheme: Theme;
  modeTheme: keyof typeof themes;
  user: userType;
  menuOpen: boolean;
  modalOpen: boolean;
  modalLogin: boolean;
  surveyInfo: invoiceInfoType;
  surverOptionsModal: boolean;
  surveyModalOpen: boolean;
  firstLogin: boolean;
  todaySurveySelected: boolean;
  // Steps
  // 0: selected survey
  selectedSurvey: selectedSurveyType;
  // 0 b
  encuestasAdeudadas: surveyType[];
  // 1: guests amount
  guestsAmount: guestsStepsType;
  // 2: drink
  drinkStep: mealStepType;
  // 3a: simpleMainMealStep Breakfast
  simpleMainMealStep: mealStepType;
  // 3b: entry Step
  entryStep: mealStepType;
  // 4 main dish
  compoundMainMealStep: mealStepType;
  // 5 dessert
  dessertStep: mealStepType;
  // Last Step: submit
  displaySideStepper: boolean;
  // Step active
  stepActive: number;

  setSurverOptionsModal(): void;
  setMenuOpen(): void;
  setModalOpen(): void;
  setModalLogin(): void;
  setSurveynfo(): void;
  setSurverModalOpen(): void;
  setComedoresDisponibles(): void,
  setComedorSeleccionado(): void,
  updateTheme(): void;
  setFirstLogin(): void;
  setTodaySurveySelected(): void;

  // Steps

  // Step 0: selected survey
  setSelectedSurvey(): void;
  // 0 b
  setEncuestasAdeudadas(): void;
  // 1: guest amount
  setGuestsAmount(): void;
  // 2: drink
  setDrinkStep(): void;
  // 3a: simpleMainMealStep Breakfast
  setSimpleMainMealStep(): void;
  // 3b: entry
  setEntryStep(): void;
  // 4
  setCompoundMainMailStep(): void;
  // 5
  setDessertStep(): void;
  // Last Step: submit
  setDisplaySideStepper(): void;
  // Step active
  setStepActive(): void;
};

export type SurveysAvailableType = Array<{
  name: string;
  type: keyof typeof dishesOptionsType;
  complete: boolean;
  available: boolean;
}>;

export type suerveyInfoType = {
  comedor: number,
  fecha: string,
  funcionamiento: string
}