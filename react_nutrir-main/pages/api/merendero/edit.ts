import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const body = JSON.parse(req.body)
    // console.log({body});
    
    const { name, street, number, between_street1, userinfo } = body
    const {id } = body.comedorInfo   
    
    const paylaod = {
        nombre: name,
        calle: street,
        numero: String(number) ,
        entre_calles: between_street1
    }

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}comedor/${id}/`
    
    try {

        const access_token = `Bearer ${userinfo.access_token}`

        const response = await fetch(url, {
            method: 'PATCH',
            headers: new Headers({
                'Authorization': access_token,
                'Content-Type': "application/json"
            }),
            body: JSON.stringify(paylaod)
        })

        console.log({ response });
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