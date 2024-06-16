import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const body = JSON.parse(req.body)
  const { token, comedor, funcionamientos } = body
  delete body.token

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}comedor/funcionamiento/`

  try {

    const config = `Bearer ${token}`

    const response = await fetch(url, {
      method: 'PATCH',
      headers: new Headers({
        'Authorization': config,
        'Content-Type': "application/json"
      }),
      body: JSON.stringify(body)
    })
    // console.log({response});
    
    if (response.status === 200) {
      res.status(200).json({ success: true, status: 200 });
    }
    if (response.status === 400) {
      res.status(400).json({ success: false, status: 400 });
    }
    if (response.status === 401) {
      res.status(401).json({ success: true, status: 401 });
    }
  } catch (error) {
    console.log('api post error', error);
  }

};

export default handler;