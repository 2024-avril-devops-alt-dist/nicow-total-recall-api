import {auth, signIn, signOut} from "@/auth";
import React from "react";
import Image from "next/image";
import styles from "@/components/auth/AppBar/AppBar.module.css";

export async function AppBar() {
    const session = await auth()
    return (
        <div className={styles.appBar}>
            {session && session.user ? (
            <>
                <p>Welcome {session.user.name}</p>
                <form action={async() => {
                    "use server"
                    await signOut({redirectTo:"/"});
                }}>
                    <button type="submit">
                        <Image
                            src="/assets/image/exit.svg"
                            alt="Disconnect icon"
                            width={50}
                            height={50}
                            priority
                        />
                    </button>
                </form>
            </>
            ):(
                <form action={async () => {
                    "use server"
                    await signIn();
                }}>
                    <button type="submit">Sign In</button>
                </form>)}
        </div>
    )
}