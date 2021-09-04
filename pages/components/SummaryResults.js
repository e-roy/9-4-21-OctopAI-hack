import React from "react";

export default function SummaryResults() {
  return (
    <div>
      <div className="text-gray-700 font-semibold my-3">Summary results</div>
      <div className="border border-main rounded-xl p-6">
        <div className="px-4 flex items-center justify-center">
          <div className="flex justify-between py-1 px-2 w-full border border-main rounded-xl">
            <input
              className="w-3/4 bg-transparent outline-none px-2 placeholder-gray-700"
              placeholder="Search"
            />
            <div className="bg-sub rounded-lg py-2 px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          <div className="flex px-3 py-1 ml-4 border border-main rounded-lg cursor-pointer">
            <div className="text-gray-700 font-semibold text-sm">Filter</div>
            <div className="pl-2 py-1 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="flex px-3 py-1 ml-4 border border-main rounded-lg w-1/2 cursor-pointer">
            <div className="text-gray-700 font-semibold text-sm">
              Add Other Sources
            </div>
            <div className="pl-2 py-1 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 mx-6 my-6 py-4">tags</div>
        <div className="flex justify-between px-4">
          <div className="font-semibold text-gray-700 py-1">
            Results<span className="pl-4">389</span>
          </div>
          <div className="flex">
            <div className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="my-1 text-bold cursor-pointer"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
            <div className="bg-sub rounded-lg px-3 py-1 mx-4 border border-main text-gray-800">
              2
            </div>
            <div className="py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="my-1 text-bold cursor-pointer"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
          <div className="flex font-semibold text-gray-700">
            <div className="pr-4 py-1">Show Per Page</div>
            <div className="bg-sub rounded-lg px-3 py-1 border border-main text-gray-700">
              50
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">Pros</div>
          <div className="w-1/2">Cons</div>
        </div>
      </div>
    </div>
  );
}
