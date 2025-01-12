import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-indigo-600 ">
      <div className=" w-full  max-w-3xl mx-auto mb-4 p-4">
        <p className="text-white mb-3 font-semibold underline-offset-1">IGCSE</p>
        <p className="text-white mb-3  text-2xl font-semibold">Memory and storage</p>
        <p className="text-white mb-3  text-lg font-normal">Test questions</p>
        <p className="text-white mb-3  text-sm font-light">
          Primary memory is a key component of a computer system. Its function is to hold data and programs that are currently in use.
        </p>
        <p className="text-white text-sm py-4">
          Part of <span className="underline underline-offset-4 decoration-2">Computer Science</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
