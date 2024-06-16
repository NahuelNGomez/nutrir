import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import currentDay from "../../../src/utils/currentDate";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // res.status(200).json('{success:false}');
  // try {
  //     const response = await fetch("http://50.116.44.91:3600/encuesta/incompletas/1/2022-03-20/",{
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         'Cookie' : 'csrftoken=zyoI6g2OaafrY0sSHoi1GD89DAa6TWnz; my-app-auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyMDc4MDIzLCJpYXQiOjE2NzIwNzcxMjMsImp0aSI6IjIyZTYyMDczYzI2ZjRiYTFhNGIzMjcwZDg2NzAyOGZkIiwidXNlcl9pZCI6MX0.WOLZF7zxoI3uaAYXFvqlENxVLamYRhp6ZfbiXZAxW7M; my-refresh-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MjA3ODkyMywiaWF0IjoxNjcyMDc3MTIzLCJqdGkiOiI2ZTlmYTk3NWE0NmI0ZTk2YjVhYmY1NTU2NzI2MWNjZCIsInVzZXJfaWQiOjF9.7Xx12zNdOTyI0wQ1De4w8Fu-wikD893IMXKi-9ohM6U; sessionid=g3g7alde70euyxwpj2mokmsso3frklhi'
  //       },
  //     });
  //     console.log('res', { response });
  //     res.status(200).json(response)
  // } catch (error) {
  //     console.log('api', error);
  //     res.status(401).json(error)
  // }
  // axios.get(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}encuesta/incompletas/1/${currentDay('YYYY-MM-DD')}`,
  //   { headers: { Authorization: `Bearer ${user.access_token}` } })
  //   .then(res => {
  //     if (res.status === 401) {
  //       setModalLogin(true)
  //     } else {
  //       const data = res.data.encuestas
  //       setEncuestasAdeudadas([...data])
  //     }
  //   })
  //   .catch(err => {
  //     // console.log('err', err.response)
  //     if (err.response.status === 401) {
  //       setModalLogin(true)
  //     }
  //   })
};

export default handler;