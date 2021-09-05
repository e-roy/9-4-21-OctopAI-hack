import Head from "next/head";
// import InputBox from "./components/InputBox";
import Logo from "./components/Logo";
import UserQuestionInput from "./components/UserQuestionInput";
import UploadText from "./components/UploadText";
import ProcessData from "./components/ProcessData";
import { useSelector } from "react-redux";
import {
  selectUserQuestion,
  selectUserTranscript,
} from "../store/userInputSlice";

export default function Home() {
  const userQuestion = useSelector(selectUserQuestion);
  const userTranscript = useSelector(selectUserTranscript);
  console.log(userQuestion);

  return (
    <div className="">
      <Head>
        <title>OctopAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-3/4 space-y-8 rounded p-4">
            <Logo size="large" />
            <UserQuestionInput />
            <UploadText />
            {userQuestion !== "" ? (
              <div>
                {userQuestion} {userTranscript}
                <ProcessData />
              </div>
            ) : (
              <div>Empty</div>
            )}
            {/* <ProcessData /> */}
          </div>
        </div>
        {/* <InputBox /> */}
      </main>
    </div>
  );
}
