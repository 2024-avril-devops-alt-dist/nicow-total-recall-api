import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import Credentials from "@auth/core/providers/credentials";


export const { handlers, signIn, signOut, auth } = NextAuth({
    session: { strategy: "jwt" },
    providers: [
        Google,
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
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
                if(credentials.email === "admin@admin.com" && credentials.password === "admin")
                    return {
                    name: "Admin",
                    };
                else return null;
                // let user = null
                //
                // // logic to salt and hash password
                // const pwHash = saltAndHashPassword(credentials.password)
                //
                // // logic to verify if the user exists
                // user = await getUserFromDb(credentials.email, pwHash)
                //
                // if (!user) {
                //     // No user found, so this is their first attempt to login
                //     // Optionally, this is also the place you could do a user registration
                //     throw new Error("Invalid credentials.")
                // }
                //
                // // return user object with their profile data
                // return user
            },
        }),

    ],
})