import Head from "next/head";
import Logo from "./components/Logo";

export default function process() {
  return (
    <div className="">
      <Head>
        <title>OctopAI</title>
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
              <div className="border border-gray-700 rounded ml-12 bg-gray-700 text-white my-2">
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
              <div className="ml-12 flex my-2">
                <button className="py-1 px-4 bg-gray-700 text-white rounded-xl">
                  Upload
                </button>
                <div className="text-sm text-gray-700 ml-8 py-2">
                  Note: Accepted formates are .txt, .pdf, .mp4
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex">
                <div className="border-2 border-gray-500 py-1.5 px-3.5 h-10 w-10 rounded-full text-gray-700">
                  3
                </div>
                <div className="p-2 mx-2 font-bold text-gray-700">
                  Awesome! Your file has succesfully uploaded. Now, it's time to
                  process your data.
                </div>
              </div>
              <div className="ml-12 flex my-2">
                <button className="py-1 px-4 bg-gray-700 text-white rounded-xl">
                  Process Data
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <InputBox /> */}
      </main>
    </div>
  );
}
