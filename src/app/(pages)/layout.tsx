import '@/styles/globals.css';
import {Header} from "@/components/layout/Header/Header";
import {Footer} from "@/components/layout/Footer/Footer";
import {ReactQueryProvider} from "@/providers/ReactQueryProvider";
import {Provider} from "@/components/ui/provider";

export const metadata = {
    title: 'Total Recall',
    description: 'The first website who give you the chance to travel in the universe.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <ReactQueryProvider>
            <Provider>
                <Header/>
                {children}
                <Footer/>
            </Provider>
        </ReactQueryProvider>
        </body>
        </html>
    )
}
