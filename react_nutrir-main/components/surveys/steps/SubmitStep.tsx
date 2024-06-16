import React, { useEffect } from 'react'
import { useAppCtx } from '../../../src/contexts/store'

const SubmitStep = () => {

  const { setDisplaySideStepper } = useAppCtx()


  useEffect(() => {
    setDisplaySideStepper(false)
  }, [])


  return (
    <>
    </>
  )
}

export default SubmitStep