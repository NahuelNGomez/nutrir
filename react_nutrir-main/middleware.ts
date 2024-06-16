import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession, IronSessionData } from "iron-session/edge";

const sessionOpts = {
  password: "!b898z$4%sGmK^FycenLZ#1i0d8A7BGO",
  cookieName: "nutri_app",
  cookieOptions: {
    secure: false,
  },
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const ironSession: IronSessionData = await getIronSession(
    request,
    response,
    sessionOpts
  );

  if (!ironSession.user?.logged) {
    
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/","/profile"],
};