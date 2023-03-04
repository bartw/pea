import Head from "next/head";
import Image from "next/image";

const Home = () => (
  <>
    <Head>
      <title>pea</title>
      <meta name="description" content="pea" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <main>
      <h1>pea</h1>
      <Image src="/pea.svg" alt="pea logo" width={180} height={37} priority />
    </main>
  </>
);

export default Home;
