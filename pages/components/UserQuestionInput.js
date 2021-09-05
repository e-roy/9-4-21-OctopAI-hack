import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserQuestion } from "../../store/userInputSlice";

export default function UserQuestionInput() {
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserQuestion(question));
  }, [question]);

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
      {question === "" ? (
        <div className="border border-main rounded-lg ml-12 bg-main text-white my-2">
          <input
            type="text"
            placeholder="Enter you interview question here"
            className="w-full py-2 px-4 bg-transparent placeholder-gray-300 outline-none"
            onChange={(event) => setQuestion(event.target.value)}
          />
        </div>
      ) : (
        <div className="border border-main rounded-lg ml-12 bg-sub text-gray-900 font-bold my-2">
          <input
            type="text"
            placeholder="Enter you interview question here"
            className="w-full py-2 px-4 bg-transparent placeholder-gray-300 outline-none"
            onChange={(event) => setQuestion(event.target.value)}
          />
        </div>
      )}
    </div>
  );
}
