import React from "react";
import { useSelector } from "react-redux";
import { selectUserQuestion } from "../../store/userInputSlice";

export default function UserQuestion() {
  const userQuestion = useSelector(selectUserQuestion);
  console.log(userQuestion);
  return (
    <div>
      <div className="flex justify-between my-3">
        <div className="text-gray-700 font-semibold">
          User Interview Question
        </div>
        <div className="flex">{userQuestion}</div>
      </div>
      <div className="flex p-2 border border-main bg-sub rounded-xl">
        <div className="p-1 font-semibold text-gray-800">Q: </div>
      </div>
    </div>
  );
}
