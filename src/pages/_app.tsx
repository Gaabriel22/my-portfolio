/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppProps } from "next/app"
import { useEffect, useState } from "react"
import "../styles/globals.scss"
import "bootstrap/dist/css/bootstrap.min.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.setAttribute("data-theme", storedTheme)
    }
  }, [])

  return <Component {...pageProps} />
}
