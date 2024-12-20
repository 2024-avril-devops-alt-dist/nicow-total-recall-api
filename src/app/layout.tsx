import {AppBar} from "@/app/components/auth/appbar";

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
    <html lang="en">
      <body>
      <AppBar />
      {children}</body>
    </html>
  )
}
