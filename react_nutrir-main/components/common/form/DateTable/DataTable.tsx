import { CircularProgress, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import { Dispatch, FC, SetStateAction } from 'react';
import { surveyType, userType } from '../../../../src/types/global';
import { rowFormatter } from './utils';

interface Props {
  encuestasAdeudadas: Array<surveyType>,
  user: userType,
  comedorId: number,
  setModalLogin: Dispatch<SetStateAction<boolean>>
}

const DataTable: FC<Props> = ({ encuestasAdeudadas, user, comedorId, setModalLogin }) => {

  const columns: GridColDef[] = [
    { field: 'date', headerName: 'Día' },
    { field: 'meal', headerName: 'Falta responder', minWidth: 100, flex: 1 },
    {
      field: 'actions',
      headerName: 'Acciones',
      renderCell: (params) => {
        return (
          <Grid
            container
            spacing={2}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Grid item xs={5} >
              <SubmitBtn
                columData={params}
                type={'uncomplete'}
                text="No se sirvió"
                user={user}
                comedorId={comedorId}
                setModalLogin={setModalLogin}
              />
            </Grid>
            <Grid item xs={5}>
              <SubmitBtn
                columData={params}
                user={user}
                comedorId={comedorId}
                setModalLogin={setModalLogin}
                type={'complete'}
                text="Responder"
              />
            </Grid>
          </Grid>
        )
      },
      width: 300
    },
  ];

  return (
    <Grid
      item
      xs={12}
      sx={{ height: 400 }}
    >
      {
        encuestasAdeudadas
          ? (
            <DataGrid
              rows={rowFormatter(encuestasAdeudadas)}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              sx={{ textTransform: 'capitalize' }}
            />
          )
          : (
            <CircularProgress
              size={20}
              // sx={loginStyles.utils.circularProgress}
              sx={{
                ml: "50%",
                mt: '15%',
              }}
              color="inherit"
            />
          )
      }
    </Grid>
  );
}

export default DataTable;
