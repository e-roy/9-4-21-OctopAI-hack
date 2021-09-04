import Head from "next/head";
import Logo from "./components/Logo";
import UserQuestion from "./components/UserQuestion";
import SummaryResults from "./components/SummaryResults";

export default function results() {
  return (
    <div className="">
      <Head>
        <title>GPT-3 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-3/4 space-y-8 border rounded p-4 bg-blue-100">
            <Logo />
            <UserQuestion />
            <SummaryResults />
          </div>
        </div>
        {/* <InputBox /> */}
      </main>
    </div>
  );
}
