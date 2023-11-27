import 'react'
import '@picocss/pico'
import Navbar from '@/app/components/navbar';

export const metadata = {
  title: 'Mighty Empires',
  description: 'a crazy game to play and even crazier to try to understand',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" data-theme="dark">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  )
}
