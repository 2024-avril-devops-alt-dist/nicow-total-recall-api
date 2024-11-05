import {NextResponse} from "next/server";

export const GET = async () => {
    return new NextResponse("Hello, ceci est un test pour voir si le système de route fonctionne.")
}