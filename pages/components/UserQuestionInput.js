import React from "react";

export default function UserQuestionInput() {
  return (
    <div className="">
      <div className="flex">
        <div className="border-2 border-main py-1.5 px-3.5 h-10 w-10 rounded-full text-gray-700 font-semibold">
          1
        </div>
        <div className="p-2 mx-2 font-bold text-gray-700">
          Add Your User Interview Question.
        </div>
      </div>
      <div className="border border-main rounded-lg ml-12 bg-main text-white my-2">
        <input
          type="text"
          placeholder="Enter you interview question here"
          className="w-full py-2 px-4 bg-transparent placeholder-white outline-none"
        />
      </div>
    </div>
  );
}
