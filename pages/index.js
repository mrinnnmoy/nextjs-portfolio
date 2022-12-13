import Head from "next/head";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomePage />
      <Experience />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}
