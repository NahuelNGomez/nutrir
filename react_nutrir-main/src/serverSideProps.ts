import { getIronSession, IronSessionData } from "iron-session";
import { GetServerSideProps } from "next";
import { sessionOptions } from "./utils/withIronSession";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const ironSession: IronSessionData = await getIronSession(
      ctx.req,
      ctx.res,
      sessionOptions
    );
      
    return {
      props: {
        user: ironSession.user ?? { logged: false },
      },
    };
  };