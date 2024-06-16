
import { Button, Grid, Typography } from '@mui/material'
import { pagesStyles } from '@styles/index'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useAppCtx } from '../../../src/contexts/store'
import useWindowDimensions from '../../../src/hooks/useWindowDimensions'
import { breakpoints } from '../../../src/constants/breakpoints'

type Props = {
  title: string,
  subtitle?: string
  children: ReactNode,
}

const FormPanel: FC<Props> = ({ title, subtitle, children }) => {

  const [width, setWidth] = useState(0);
  const { modeTheme } = useAppCtx();
  const { surveyStyles: { formPanel, formPanelMobile } } = pagesStyles(modeTheme);
  const dimensions = useWindowDimensions();
  const isMobile = width !== 0 && width >= breakpoints.xs && width < breakpoints.m;

  useEffect(() => {
    setWidth(dimensions.width);
  }, []);

  return (
    <>
      <Grid
        container
        justifyContent={'center'}

      >
        <Grid item xs={10} >
          <Typography sx={isMobile ? formPanel.title : formPanelMobile.title}>{title}</Typography>
        </Grid>
        <Grid item xs={10} sx={ isMobile ? formPanel.subtitle : formPanelMobile.subtitle}>
          <Typography>{subtitle}</Typography>
        </Grid>

        <Grid
          container
          xs={10}
          sx={{ height: '400px', mt: 2 }}
          justifyContent={'flex-end'}
        >
          <Grid
            item xs={12} >
            {children}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default FormPanel