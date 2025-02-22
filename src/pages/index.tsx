import Navbar from "@components/Navbar"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel | Portfólio</title>
        <meta
          name="description"
          content="Portfólio de Gabriel - Desenvolvedor de Software"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <h1>Bem-vindo ao meu portfólio!</h1>
      </main>
    </>
  )
}
