import React, { createContext, useContext, useEffect, useState } from "react";
import { lightTheme } from "../template/theme";
import { storeType, themes, userType, invoiceInfoType, comedorInfoType, selectedSurveyType, guestsStepsType, mealStepType, surveyType } from "../types/global";
import { comedorInit, mealInit } from "./constants/initInfo";

const initialStoreState: storeType = {
  currentTheme: lightTheme,
  modeTheme: "light",
  user: {
    pk: 0,
    first_name: "",
    last_name: "",
    cuil: 1,
    email: "",
    comedor: "",
    logged: false,
    telefono: '',
    access_token: '',
    refresh_token: '',
    groups: []
  },
  menuOpen: false,
  surveyModalOpen: false,
  modalOpen: false,
  modalLogin: false,
  surveyInfo: {},
  surverOptionsModal: false,
  comedoresDisponibles: [],
  comedorSeleccionado: comedorInit,
  firstLogin: false,
  todaySurveySelected: false,
  // Steps
  // Step 0
  selectedSurvey: { date: '', service: '' },
  // 0 b
  encuestasAdeudadas: [],
  // Step 1: guest Amount
  guestsAmount: {
    childs: 0,
    kids: 0,
    teens: 0,
    adults: 0,
  },
  // Step 2: Drink
  drinkStep: mealInit,
  // Step 3a: simpleMainMealStep Breakfast
  simpleMainMealStep: mealInit,
  // 3b
  entryStep: mealInit,
  // 4
  compoundMainMealStep: mealInit,
  dessertStep: mealInit,
  // Last step
  displaySideStepper: true,
  // Step active
  stepActive: 0,

  setSurverOptionsModal: () => { },
  setMenuOpen: () => { },
  setModalOpen: () => { },
  setModalLogin: () => { },
  setSurverModalOpen: () => { },
  updateTheme: () => { },
  setSurveynfo: () => { },
  setComedoresDisponibles: () => { },
  setComedorSeleccionado: () => { },
  setFirstLogin: () => { },
  setTodaySurveySelected: () => { },
  // Steps
  // 0 b
  setEncuestasAdeudadas: () => { },
  setSelectedSurvey: () => { },
  // Step 1: guest Amount
  setGuestsAmount: () => { },
  // Step 2: drink Step
  setDrinkStep: () => { },
  // Step 3: simpleMainMealStep Breakfast
  setSimpleMainMealStep: () => { },
  // Step 3b: entry
  setEntryStep: () => { },
  // 4
  setCompoundMainMailStep: () => { },
  // 5
  setDessertStep: () => { },
  // Last Step
  setDisplaySideStepper: () => { },
  // Step Active
  setStepActive: () => { }
};

export const useStoreController = ({ userLog }: { userLog: userType }) => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [modeTheme, setModeTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [comedoresDisponibles, setComedoresDisponibles] = useState<Array<any>>([])
  const [comedorSeleccionado, setComedorSeleccionado] = useState<comedorInfoType>(comedorInit)
  const [surveyModalOpen, setSurverModalOpen] = useState(false);
  const [surveyInfo, setSurveynfo] = useState<invoiceInfoType>({});
  const [surverOptionsModal, setSurverOptionsModal] = useState(false);
  const [firstLogin, setFirstLogin] = useState<boolean>(false);
  const [todaySurveySelected, setTodaySurveySelected] = useState<boolean>(false);
  // Steps
  const [selectedSurvey, setSelectedSurvey] = useState<selectedSurveyType>({ date: '', service: '' });
  const [encuestasAdeudadas, setEncuestasAdeudadas] = useState<Array<surveyType>>([])
  const [guestsAmount, setGuestsAmount] = useState<guestsStepsType>({
    childs: 0,
    kids: 0,
    teens: 0,
    adults: 0
  });
  const [drinkStep, setDrinkStep] = useState<mealStepType>(mealInit)
  const [simpleMainMealStep, setSimpleMainMealStep] = useState<mealStepType>(mealInit)
  const [entryStep, setEntryStep] = useState<mealStepType>(mealInit)
  const [compoundMainMealStep, setCompoundMainMailStep] = useState<mealStepType>(mealInit)
  const [dessertStep, setDessertStep] = useState<mealStepType>(mealInit)
  const [displaySideStepper, setDisplaySideStepper] = useState(true);
  const [stepActive, setStepActive] = useState<number>();

  ;
  const updateTheme = (mode: keyof typeof themes): void => {
    setCurrentTheme(themes[mode]);
    setModeTheme(mode);
    localStorage.setItem("theme-mode", mode);
  };

  useEffect(() => {
    const savedMode: keyof typeof themes =
      (localStorage.getItem("theme-mode") as keyof typeof themes) ?? "light";
    setModeTheme(savedMode);
    setCurrentTheme(themes[savedMode]);
  }, []);

  return {
    comedoresDisponibles,
    comedorSeleccionado,
    currentTheme,
    modeTheme,
    user: userLog,
    menuOpen,
    modalOpen,
    modalLogin,
    surveyInfo,
    surverOptionsModal,
    surveyModalOpen,
    firstLogin,
    todaySurveySelected,
    // Step
    selectedSurvey,
    // 0 b
    encuestasAdeudadas,
    // Step 1: guest amount
    guestsAmount,
    // Step 2: drink
    drinkStep,
    // Step 3
    simpleMainMealStep,
    // 3b Entry
    entryStep,
    // 4
    compoundMainMealStep,
    // 5
    dessertStep,
    // Last step
    displaySideStepper,
    // Step active
    stepActive,

    setSurverOptionsModal,
    setMenuOpen,
    setModalOpen,
    setModalLogin,
    setSurveynfo,
    setSurverModalOpen,
    setComedoresDisponibles,
    setComedorSeleccionado,
    updateTheme,
    setFirstLogin,
    setTodaySurveySelected,
    // Step
    setSelectedSurvey,
    // 0 b
    setEncuestasAdeudadas,
    // Step 1: guest amount
    setGuestsAmount,
    // Step 2: drink
    setDrinkStep,
    // Step 3
    setSimpleMainMealStep,
    // 3b,
    setEntryStep,
    // 4
    setCompoundMainMailStep,
    // 5
    setDessertStep,
    // Last step
    setDisplaySideStepper,
    // Step Active
    setStepActive,
  };
};

export const AppCtxProvider = ({
  user,
  children,
}: {
  user: userType;
  children: React.ReactNode;
}) => {
  return (
    <AppCtx.Provider value={useStoreController({ userLog: user })}>
      {children}
    </AppCtx.Provider>
  );
};

export const AppCtx =
  createContext<ReturnType<typeof useStoreController>>(initialStoreState);

export const useAppCtx = () => useContext(AppCtx);
