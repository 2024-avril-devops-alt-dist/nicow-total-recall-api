import {auth} from "@/auth";
export async function createBooking(userId: string, flightId: string) {
    const session = await auth()
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/booking`;
    if (session?.user) {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, flightId }),
        });
        if (!res.ok) {
            throw new Error('Erreur lors de la création de la réservation');
        }

        return res.json();
    }
}