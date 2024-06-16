import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {


  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}user/sesion/password/change/`
  // const body = JSON.parse(req.body)
  console.log({req});
  
  // const { email, firstName, lastName, phone, userinfo } = body

  // const paylaod = {
  //   email: email,
  //   first_name: firstName,
  //   last_name: lastName,
  //   telefono: phone
  // }

  // try {

  //   const access_token = `Bearer ${userinfo.access_token}`

  //   const response = await fetch(url, {
  //     method: 'PATCH',
  //     headers: new Headers({
  //       'Authorization': access_token,
  //       'Content-Type': "application/json"
  //     }),
  //     body: JSON.stringify(paylaod)
  //   })

  //   console.log({ response });
  //   if (response.status === 200) {
  //     res.status(200).json({ success: true, status: 200 });
  //   }
  //   if (response.status === 400) {
  //     res.status(400).json({ success: true, status: 400 });
  //   }
  //   if (response.status === 401) {
  //     res.status(401).json({ success: false, status: 401 });
  //   }
  // } catch (error) {
  //   console.log('api post error', error);
  // }

}

export default handler;