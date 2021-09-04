import Head from "next/head";
// import InputBox from "./components/InputBox";
import Logo from "./components/Logo";
import UserQuestionInput from "./components/UserQuestionInput";
import UploadText from "./components/UploadText";
import ProcessData from "./components/ProcessData";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>GPT-3 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-3/4 space-y-8 rounded p-4">
            <Logo size="large" />
            <UserQuestionInput />
            <UploadText />

            <ProcessData />
          </div>
        </div>
        {/* <InputBox /> */}
      </main>
    </div>
  );
}
