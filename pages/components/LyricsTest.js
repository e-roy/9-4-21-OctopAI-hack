import { useState } from "react";

export default function LyricsTest() {
  const [data, setData] = useState({ text: "" });
  const [query, setQuery] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(`/api/openai`, {
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
      <div className="w-3/4 space-y-8 border rounded p-4 bg-gray-300">
        <div className="text-center text-xl text-gray-700 font-semibold">
          <a>AI Lyrics Generator (for testing)</a>
        </div>
        <form onSubmit={sendMessage}>
          <div className="border p-4 my-8 rounded">
            <div className="">
              <label
                htmlFor="artist"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Artist:
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="artist"
                  id="artist"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm p-2 border border-gray-300 rounded-md"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <button
                className="px-4 py-2 my-4 bg-blue-400 hover:bg-blue-500 rounded text-white"
                type="submit"
              >
                Generate
              </button>

              <h4>Lyrics</h4>
              {isLoading ? <div>Loading ...</div> : <span>{data.text}</span>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
