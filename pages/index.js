import Head from "next/head";
import InputBox from "./components/InputBox";
import LyricsTest from "./components/LyricsTest";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>GPT-3 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <LyricsTest />
        <InputBox />
      </main>
    </div>
  );
}
