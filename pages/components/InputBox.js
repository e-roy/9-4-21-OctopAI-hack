import { useState } from "react";

export default function Example() {
  const [data, setData] = useState({ text: "" });
  const [query, setQuery] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(`/api/openai-python`, {
      body: JSON.stringify({
        name: query,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const data = await res.json();
    setData(data);
    setIsLoading(false);
  };
  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-3/4 space-y-8 border rounded p-4 bg-blue-100">
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={sendMessage}
        >
          <div className="text-center text-xl text-gray-700 font-semibold">
            Enter Transcript here
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="transcript" className="sr-only">
                Transcript
              </label>
              <textarea
                id="transcript"
                name="transcript"
                type="text"
                required
                rows="14"
                className="appearance-none rounded-none resize-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter transcript"
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Submit
            </button>
          </div>
        </form>
        <div>
          {isLoading ? <div>Loading ...</div> : <span>{data.text}</span>}
        </div>
      </div>
    </div>
  );
}
