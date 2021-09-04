import React from "react";

export default function UserQuestion() {
  return (
    <div>
      <div className="flex justify-between my-3">
        <div className="text-gray-700 font-semibold">
          User Interview Question
        </div>
        <div className="flex">
          <div className="text-sm text-gray-600">
            Files succesfully uploaded
          </div>
          {/* <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
          </div> */}
        </div>
      </div>
      <div className="flex p-2 border border-gray-700 bg-blue-400 rounded-xl">
        <div className="p-1 font-bold">Q: </div>
        <input className="w-3/4 bg-blue-400 outline-none px-2" />
        <div>
          <button className="bg-blue-800 hover:bg-blue-900 text-gray-100 px-3 py-1 rounded-lg">
            Process Results
          </button>
        </div>
      </div>
    </div>
  );
}
