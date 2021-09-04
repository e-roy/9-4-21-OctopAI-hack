import React from "react";
import Image from "next/image";
import logo from "../images/OctopAI_logo.png";

export default function Logo(props) {
  return (
    <div>
      {props.size === "large" ? (
        <div className="border-b py-4">
          <div className="flex place-content-center -mt-12">
            <Image
              className="m-auto"
              src={logo}
              alt="Logo"
              height={250}
              width={400}
            />
          </div>
          <div className="text-center justify-center text-gray-700">
            One-liner of what OctopAI is
          </div>
        </div>
      ) : (
        <div className="flex place-content-center -mt-12">
          <Image
            className="m-auto"
            src={logo}
            alt="Logo"
            height={100}
            width={150}
          />
        </div>
      )}
    </div>

    // <div className="border-b py-4">
    //   <div className="flex place-content-center -mt-12">
    //     <Image
    //       className="m-auto"
    //       src={logo}
    //       alt="Logo"
    //       height={250}
    //       width={400}
    //     />
    //   </div>
    //   {props.size}
    //   <div className="text-center justify-center text-gray-700">
    //     One-liner of what OctopAI is
    //   </div>
    // </div>
  );
}
