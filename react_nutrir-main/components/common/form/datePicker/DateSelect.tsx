import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import moment from "moment";
import momentAdapter from '@date-io/moment'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useState } from "react";
import { searchSurveysByDayFetch } from "../../../surveys/services";
import { useAppCtx } from "../../../../src/contexts/store";
import { fetchErrorHandler } from "../../../../src/dataFetch/fetchErrorHandler";



const DateSelect = () => {

  const { user, comedorSeleccionado, setEncuestasAdeudadas, setTodaySurveySelected, setModalLogin } = useAppCtx();

  const momentFns = new momentAdapter()
  const initialMoment = momentFns.date()

  const [date, setDate] = useState(initialMoment);

  const comedorId = comedorSeleccionado.id
  const token = user.access_token

  const handleChange = (newValue: any) => {
    setDate(newValue);
    
    const dateFormatted = moment(newValue).format('DD/MM/YYYY')

    searchSurveysByDayFetch(dateFormatted, comedorId, token)
      .then(res =>{

        const data = res.data.encuestas

        if(data.length === 0 ){
          alert(`No hay encuestas pendientes el día ${dateFormatted}`)
        } else {
          setTodaySurveySelected(true)
          setEncuestasAdeudadas([...data])
        }
      })
      .catch(err =>{
        fetchErrorHandler(err, setModalLogin)
      })

  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label=""
        inputFormat="DD/MM/YYYY"
        value={date}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

  )

}

export default DateSelect