import { AppProps } from "next/app"
import { ThemeProvider } from "../context/ThemeContext"
import "../styles/globals.scss"
import "bootstrap/dist/css/bootstrap.min.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
