import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next";
import config from "../constants/config";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      access_token?: string;
      refresh_token?: string;
      user?: string;
      name?: string;
      profile_picture?: string;
      phone?: string;
      logged?: boolean;
      pk?: number;
      cuil?: string;
      email?: string;
      first_name?: string;
      last_name?: string;
      telefono?: string;
      picture: null;
      // groups: [1];
      groups: Array<number>;
    };
  }
}

export const sessionOptions = {
  password: "!b898z$4%sGmK^FycenLZ#1i0d8A7BGO",
  cookieName: "nutri_app",
  cookieOptions: {
    secure: false,
  },
};

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}
