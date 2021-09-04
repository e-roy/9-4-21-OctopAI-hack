import Head from "next/head";
// import InputBox from "./components/InputBox";
import Logo from "./components/Logo";

export default function Home() {
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
            <div className="text-center justify-center text-gray-700">
              One-liner of what OctopAI is
            </div>
            <div className="">
              <div className="flex">
                <div className="border-2 border-gray-500 py-1.5 px-3.5 h-10 w-10 rounded-full text-gray-700">
                  1
                </div>
                <div className="p-2 mx-2 font-bold text-gray-700">
                  Add Your User Interview Question.
                </div>
              </div>
              <div className="border border-gray-700 rounded ml-12 bg-gray-700">
                <input
                  type="text"
                  placeholder="Enter you interview question here"
                  className="w-full p-2 bg-transparent"
                />
              </div>
            </div>

            <div className="">
              <div className="flex">
                <div className="border-2 border-gray-500 py-1.5 px-3.5 h-10 w-10 rounded-full text-gray-700">
                  2
                </div>
                <div className="p-2 mx-2 font-bold text-gray-700">
                  Upload Your Interview Text or Video To Analyze.
                </div>
              </div>
              <div>Enter you interview question here</div>
            </div>
          </div>
        </div>
        {/* <InputBox /> */}
      </main>
    </div>
  );
}
