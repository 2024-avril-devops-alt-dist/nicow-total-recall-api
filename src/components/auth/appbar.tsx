import {auth, signIn, signOut} from "@/auth";
import React from "react";

export async function AppBar() {
    const session = await auth()
    return (
        <div>
            {session && session.user ? (
            <div>
                <p>{session.user.name}</p>
                <form action={async() => {
                    "use server"
                    await signOut();
                }}>
                    <button type="submit">Sign Out</button>
                </form>
            </div>):(
                <form action={async () => {
                    "use server"
                    await signIn();
                }}>
                    <button type="submit">Sign In</button>
                </form>)}
        </div>
    )
}