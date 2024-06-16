import { Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useAppCtx } from "../../../src/contexts/store";
import {
  dishesCardType,
  dishesOptionsType,
  dishestype,
  suerveyInfoType,
  SurveysAvailableType,
} from "../../../src/types/global";
import { invoiceInfoType } from "../../../src/types/global";
import DishIcon from "../special/DishIcon";
import { dishesList } from "../../../src/contents/dishesList";


type Props = {
  surveys: Array<suerveyInfoType>
  setMealTypeStep: (name: string) => {}
}


const SurveysAvailable: FC<Props> = ({
  surveys, setMealTypeStep
}) => {
  const { modeTheme } = useAppCtx();
  const { surveyInfo, setSurveynfo } = useAppCtx()
  const [selectedDish, setSelectedDish] = useState<
    keyof typeof dishesOptionsType | null
  >(null);
  const [cardList, setCardList] = useState<Array<dishesCardType>>([])

  const dishHandleClick = (type: keyof typeof dishesOptionsType, name: string) => {
    setMealTypeStep(name)
    setSelectedDish(type);
    setSurveynfo({
      dishes: [
        {
          type,
          name,
          ingredients: []
        }
      ]
    })

  }

  const dishesListed = [...dishesList]

  const dishesAvailables = (dish: suerveyInfoType) => {
    const dishCards = dishesListed.map(element => {
      const name = element.name.toLowerCase()
      const funcionamiento = dish.funcionamiento.replace('_', ' ')

      if (funcionamiento == name) {
        element.available = true
      } else {
        element.available = false
      }
      return element
    })
    // console.log({ dishCards });
    return dishCards
  }

  console.log({ surveys });


  useEffect(() => {
    if (surveys[0]) {
      const list = dishesAvailables(surveys[0])
      // console.log('list', list);
      setCardList(list)
    }
  }, [surveys])


  return (
    <>
      <Grid
        container
        xs={7}
        sx={{ margin: '0 auto', height: '350px', gap: '2rem 2rem' }}
        justifyContent={'space-around'}
      >

        {cardList?.map(({ name, type, complete, available }) => (
          <Grid
            item
            justifyContent={"center"}
            sx={{ opacity: available ? 1 : 0.5 }}
            key={`key_${name}`}
          >
            <DishIcon
              background={
                modeTheme == "dark" ? "rgba(255, 255, 255, 0.09)" : "white"
              }
              width={100}
              height={100}
              type={type}
              color={modeTheme == "dark" ? "white" : "#6fc2c1"}
              active={type === selectedDish || complete}
              complete={complete}
              dishHandleClick={() => {
                dishHandleClick(type, name)
              }}
              disabled={!available}
            />

            <Typography sx={{ textAlign: "center", pt: 1, pb: 1 }}>
              {name}
            </Typography>
          </Grid>
        ))}

      </Grid>
    </>
  );
};

export default SurveysAvailable;
