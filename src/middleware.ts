import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const session = await auth();
    const isHome = request.nextUrl.pathname === "/";

    if (session || isHome) {
        return NextResponse.next();
    }

    const redirectUrl = new URL('/api/auth/signin', request.url);
    redirectUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(new URL(redirectUrl, request.url))
}

export const config = {
    matcher: ["/dashboard", "/search", "/booking"],
};
