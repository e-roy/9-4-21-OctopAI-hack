import React from "react";
import Link from "next/link";

export default function ProcessData() {
  return (
    <div className="">
      <div className="flex">
        <div className="border-2 border-main py-1.5 px-3.5 h-10 w-10 rounded-full text-gray-700 font-semibold">
          3
        </div>
        <div className="p-2 mx-2 font-bold text-gray-700">
          Awesome! Now, it's time to process your data.
        </div>
        {/* <div className="p-2 mx-2 font-bold text-gray-700">
          Awesome! Your file has succesfully uploaded. Now, it's time to process
          your data.
        </div> */}
      </div>
      <div className="ml-12 flex my-2">
        <Link href="/results">
          <button className="py-1 px-4 bg-main text-white rounded-xl">
            Process Data
          </button>
        </Link>
      </div>
    </div>
  );
}
