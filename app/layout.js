import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from 'next/font/local'

export const metadata = {
  title: 'LinkBytes - your own url shortner',
  description: 'A url shortner made using nextJS',
}

const myFont = localFont({
  src: './fonts/SUSEMono-VariableFont_wght.ttf',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body className="bg-blue-50">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
