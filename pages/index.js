import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Home from "../Components/Home"
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Curate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  )
}
