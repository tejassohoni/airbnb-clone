import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link
          rel="icon"
          href="https://www.clipartmax.com/png/small/114-1149625_executive-airbnb-cleaning-airbnb-logo-png.png"
        />
      </Head>

      <Header />
      <Banner />
    </div>
  );
}
