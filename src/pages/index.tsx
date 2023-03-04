import Image from "next/image";

const Home = () => (
  <>
    <main>
      <h1>pea</h1>
      <Image src="/pea.svg" alt="pea logo" width={180} height={37} priority />
    </main>
  </>
);

export default Home;
