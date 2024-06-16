import { FormControlLabel, FormGroup, Grid, Switch } from '@mui/material'
import { FormikProps } from 'formik';
import React, { FC, useEffect, useState } from 'react'
import { serviciosDiaType } from '../../../src/types/global';

type Props = {
  comedorId: number;
  formikProps: FormikProps<any>;
  dayName: string;
  defaultChecked: boolean;
  name: string;
}

const ServiceAvailableCard: FC<Props> = ({
  comedorId,
  formikProps,
  defaultChecked,
  name,
  dayName,
}) => {

  const [check, setCheck] = useState(false)
  const { setFieldValue, getFieldProps } = formikProps
  const funcionamientosProps = getFieldProps('funcionamientos')

  useEffect(() => {
    setCheck(defaultChecked)
  }, [defaultChecked])


  const handleChange = (event: any): void => {

    setCheck(event.target.checked)

    const currentFuncionamientosValues = funcionamientosProps.value
    const dayNameLoweCase = dayName.toLocaleLowerCase()
    const serviceNameLowerCase = name.toLocaleLowerCase()

    const [serviciosDia] = currentFuncionamientosValues.filter((el: serviciosDiaType) => {
      return el.dia === dayNameLoweCase
    })


    if (serviciosDia) {

      const newEntry = { ...serviciosDia }
      newEntry.funcionamientos = [...serviciosDia.funcionamientos]

      const newFuncionamientosValues = currentFuncionamientosValues.filter((el: serviciosDiaType) => el.dia !== dayNameLoweCase)

      if (event.target.checked) {
        newEntry.funcionamientos.push(serviceNameLowerCase)
        const newValue = [...newFuncionamientosValues, newEntry]
        setFieldValue('funcionamientos', newValue)

      } else {

        const newEntryFiltered = newEntry.funcionamientos.filter((e: string) => e !== serviceNameLowerCase)
        newEntry.funcionamientos = newEntryFiltered
        const newFuncionamientosFiltered = [...newFuncionamientosValues, newEntry]

        setFieldValue('funcionamientos', newFuncionamientosFiltered)
      }

    } else {
      const newDayEntry = {
        comedor: comedorId,
        dia: dayNameLoweCase,
        funcionamientos: [serviceNameLowerCase]

      }
      setFieldValue('funcionamientos', [...currentFuncionamientosValues, newDayEntry])
    }

  }

  return (
    <Grid item xs={12} md={6} lg={4} xl={4}>
      <FormGroup>
        <FormControlLabel
          checked={check}
          onChange={handleChange}
          control={<Switch />}
          label={name}
        />
      </FormGroup>
    </Grid>
  )
}

export default ServiceAvailableCard