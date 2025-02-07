import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import Credentials from "@auth/core/providers/credentials";
import {isUserExists} from "@/services/IsUserExistsService";

export const {handlers, signIn, signOut, auth} = NextAuth({
    session: {strategy: "jwt"},
    providers: [
        Google,
        Credentials({
            credentials: {
                email: {
                    label: "Email",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            authorize: async (credentials) => {
                if (credentials.email === "admin@default.com" && credentials.password === "default_password")
                    return {
                        name: "Admin",
                    };
                else return null;
            },
        }),
    ],

    callbacks: {
        async jwt({token, user}) {
            if (user) {
                const dbUser = isUserExists(user.email)
                if (!dbUser) {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/User`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            email: user.email,
                            name: user.name,
                            image: user.image,
                        }),
                    });

                    const data = await res.json();
                    if (data?.id) {
                        token.id = data.id;
                    }
                } else {
                  token.id = dbUser.id;
                }

            }
            return token;
        },
        session({session, token}) {
            session.user.id = <string>token.id
            return session
        },
    },
})