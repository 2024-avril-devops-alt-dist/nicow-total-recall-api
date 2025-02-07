import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const session = await auth();
    const isHome = request.nextUrl.pathname === "/";
    const response = NextResponse.next();

    if (session || isHome) {
        response.headers.set("X-Is-Home", isHome ? "true" : "false");
        return response;
    }

    return NextResponse.redirect(new URL('/redirect', request.url))
}

export const config = {
    matcher: ["/dashboard", "/search", "/booking"],
};
