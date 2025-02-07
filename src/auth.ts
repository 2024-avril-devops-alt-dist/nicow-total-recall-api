import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import Credentials from "@auth/core/providers/credentials";


export const { handlers, signIn, signOut, auth } = NextAuth({
    session: { strategy: "jwt" },
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
                if(credentials.email === "admin@default.com" && credentials.password === "default_password")
                    return {
                    name: "Admin",
                    };
                else return null;
            },
        }),

    ],
})