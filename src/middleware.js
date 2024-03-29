import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
  
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const cookieStore = cookies();
    const verify = cookieStore.get("isAdmin")
    const isAdmin = verify?.value === "true";
    if (isAdmin) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
