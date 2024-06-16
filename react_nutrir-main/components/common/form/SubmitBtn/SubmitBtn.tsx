import { Button } from "@mui/material"
import { pagesStyles } from "@styles/index"
import { useRouter } from "next/router"
import { Dispatch, FC, SetStateAction } from "react"
import { useAppCtx } from "../../../../src/contexts/store"
import { userType } from "../../../../src/types/global"
import { uncompletedSurveyFormatter } from "../../../surveys/steps/utils/uncompleteSurveyFormatter"
import { uncompletedSurveyPost } from "../../../surveys/services"
import { fetchErrorHandler } from "../../../../src/dataFetch/fetchErrorHandler"



interface Props {
  text: string,
  type: string,
  columData: any,
  user: userType,
  comedorId: number,
  setModalLogin: Dispatch<SetStateAction<boolean>>,
}


const SubmitBtn: FC<Props> = ({
  text,
  type = 'complete',
  columData,
  user,
  comedorId,
  setModalLogin
}) => {

  const { modeTheme, setSelectedSurvey } = useAppCtx();
  const { surveyStyles } = pagesStyles(modeTheme);

  const completeHandleClick = (e: any, data: any) => {
    e.preventDefault()
    const date = data.row.date
    const service = data.row.meal

    setSelectedSurvey({
      date,
      service
    })
    // setDateStep(date)
    // setSurveyInfo(surveyData)
  }

  const uncompleteHandleClick = (e: any, data: any) => {
    e.preventDefault()
    const date = data.row.date
    const service = data.row.meal

    const payload = uncompletedSurveyFormatter(date, service, comedorId)

    uncompletedSurveyPost(payload, user.access_token)
      .then(res => {
        if (res.status === 200) {
          alert('La opción fue marcada como no servida')
        }
      })
      .catch(err => {
        fetchErrorHandler(err, setModalLogin)
      })

  }

  return (
    <>
      {
        type === 'complete'
          ? (
            <Button
              sx={surveyStyles.dataTable.utils.completeButton}
              onClick={(e) => {
                const data = columData
                completeHandleClick(e, data)
              }}
            >
              {text}
            </Button>
          )
          :
          type === 'uncomplete'
            ? (
              <Button
                sx={surveyStyles.dataTable.utils.uncompleteButton}
                onClick={(e) => {
                  const data = columData
                  uncompleteHandleClick(e, data)
                }}
              >
                {text}
              </Button>
            )
            : null
      }
    </>
  )
}

export default SubmitBtn