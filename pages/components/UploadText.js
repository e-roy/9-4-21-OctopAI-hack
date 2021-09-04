import React from "react";

export default function UploadText() {
  return (
    <div className="">
      <div className="flex">
        <div className="border-2 border-main py-1.5 px-3.5 h-10 w-10 rounded-full text-gray-700 font-semibold">
          2
        </div>
        <div className="p-2 mx-2 font-bold text-gray-700">
          Upload Your Interview Text or Video To Analyze.
        </div>
      </div>
      <div className="ml-12 flex my-2">
        <button className="flex py-1 px-4 bg-main text-white rounded-xl">
          Upload
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="my-1 mx-2"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
        </button>
        <div className="text-sm text-gray-700 ml-8 py-1">
          Note: Accepted formates are .txt, .pdf, .mp4
        </div>
      </div>
    </div>
  );
}
