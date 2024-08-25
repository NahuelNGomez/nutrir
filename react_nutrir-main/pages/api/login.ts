import type { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../src/utils/withIronSession';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = JSON.parse(req.body);

    if (email && password) {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}user/sesion/login/`,
            {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );

        const resParsed = await response.json();
        if (!resParsed.user) {
            res.status(401).json({ success: false });
        }

        req.session.user = {
            access_token: resParsed.access_token,
            refresh_token: resParsed.refresh_token,
            pk: resParsed.user.pk,
            cuil: resParsed.user.cuil,
            email: resParsed.user.email,
            first_name: resParsed.user.first_name,
            last_name: resParsed.user.last_name,
            telefono: resParsed.user.telefono,
            picture: resParsed.user.picture,
            groups: resParsed.user.groups,
            logged: true,
        };

        await req.session.save();

        res.status(200).json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
};

export default withSessionRoute(handler);
