import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Privacy from "../Components/Privacy"
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Curate - Privacy Policy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="App">
        <Header />
        <Privacy />
        <Footer />
      </div>
    </>
  )
}
