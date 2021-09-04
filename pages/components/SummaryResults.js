import React from "react";

export default function SummaryResults() {
  return (
    <div>
      <div className="text-gray-700 font-semibold my-3">Summary results</div>
      <div className="border border-gray-500 rounded-xl p-6">
        <div className="px-16 flex items-center justify-center">
          <div className="flex p-2 w-full border border-gray-700 bg-blue-400 rounded-xl">
            <input className="w-3/4 bg-blue-400 outline-none px-2" />
          </div>
          <div className="flex px-3 ml-4 border border-gray-700 rounded-lg">
            <div className="text-gray-700 font-semibold">Filter</div>
            <div className="pl-2">1</div>
          </div>
        </div>
        <div className="border-b border-gray-300 mx-6 my-6 py-4">tags</div>
        <div className="flex justify-between px-4">
          <div className="font-semibold text-gray-700 py-1">
            Results<span className="pl-4">389</span>
          </div>
          <div class="flex">
            <div className="py-1">1</div>
            <div className="bg-blue-400 rounded px-3 py-1 mx-4 border border-gray-700 text-gray-700">
              2
            </div>
            <div className="py-1">3</div>
          </div>
          <div className="flex font-semibold text-gray-700">
            <div className="pr-4 py-1">Show Per Page</div>
            <div className="bg-blue-400 rounded px-3 py-1 border border-gray-700 text-gray-700">
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
