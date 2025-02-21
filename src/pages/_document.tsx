import { Html, Main, NextScript } from "next/document"
import Head from "next/head"

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="theme-color" content="#007bff" />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
                const theme = localStorage.getItem('theme') || 'light'
                document.documentElement.setAttribute('data-theme', theme)
            })()
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
