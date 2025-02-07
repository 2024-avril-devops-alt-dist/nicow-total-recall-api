import { auth } from "@/auth"
export default async function BookingPassengers(){

        const session = await auth()
        if (session?.user) {
                console.log(session.user);
        }
}