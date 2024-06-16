import BreakfastIcon from "../../components/icons/BreakfastIcon";
import DinnerIcon from "../../components/icons/DinnerIcon";
import LunchIcon from "../../components/icons/LunchIcon";
import MeriendaIcon from "../../components/icons/MeriendaIcon";
import OllaPopularIcon from "../../components/icons/OllaPopularIcon";
import { dishesOptionsType, SurveysAvailableType } from "../types/global";

export const dishesListIcons = (color="#474747") => ({
  [dishesOptionsType.BREAKFAST]: (
    <BreakfastIcon color={color} width={50} height={50} />
  ),
  [dishesOptionsType.DINNER]: (
    <DinnerIcon color={color} width={50} height={50} />
  ),
  [dishesOptionsType.LUNCH]: (
    <LunchIcon color={color} width={50} height={50} />
  ),
  [dishesOptionsType.MERIENDA]: (
    <MeriendaIcon color={color} width={50} height={50} />
  ),
  [dishesOptionsType.OLLAPOPULAR]: (
    <OllaPopularIcon color={color} width={50} height={50} />
  ),
});

export const dishesList:SurveysAvailableType = [
  {
    name: "Desayuno",
    type: "BREAKFAST",
    complete: false,
    available: true,
  },
  {
    name: "Almuerzo",
    type: "LUNCH",
    complete: false,
    available: true,
  },
  {
    name: "Merienda",
    type: "MERIENDA",
    complete: false,
    available: false,
  },
  {
    name: "Cena",
    type: "DINNER",
    complete: false,
    available: true,
  },
  {
    name: "Olla Popular",
    type: "OLLAPOPULAR",
    complete: false,
    available: true,
  },
];
