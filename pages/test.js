import Head from "next/head";
import LyricsTest from "./components/LyricsTest";

export default function Test() {
  return (
    <div className="">
      <Head>
        <title>GPT-3 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <LyricsTest />
      </main>
    </div>
  );
}
