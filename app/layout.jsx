import Footer from './Components/Footer'
import Header from './Components/Header'
import './globals.css'

export const metadata = {
  title: 'Elektriada 2023',
  description: 'Spletna stran za elektriado 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
