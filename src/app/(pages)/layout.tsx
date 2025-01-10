import '@/styles/globals.css';
import {Header} from "@/components/layout/Header/Header";
import {Footer} from "@/components/layout/Footer/Footer";
import {ReactQueryProvider} from "@/providers/ReactQueryProvider";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
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
       <Header />
      {children}
      <Footer />
      </ReactQueryProvider>
      </body>
    </html>
  )
}
