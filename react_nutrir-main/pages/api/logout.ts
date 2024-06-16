import type { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../src/utils/withIronSession";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}user/sesion/logout/`)  
    req.session.destroy();

    res.redirect("/");
  } catch (e) {
    res.json(e);
  }
};

export default withSessionRoute(handler);
