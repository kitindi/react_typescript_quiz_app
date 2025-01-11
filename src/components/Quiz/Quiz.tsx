import React from "react";

const Quiz = () => {
  return (
    <div className="container w-full max-w-2xl mx-auto p-10">
      <h1 className="text-2xl font-semibold mb-5"> Computer science knowledge check</h1>

      <div className=" p-3 ">
        <h3 className="text-lg font-normal mb-4">What stands for HTML</h3>
        <ul className="flex flex-col space-y-3">
          <li className="text-sm p-3 border border-slate-300 rounded-md cursor-pointer">Hypertext Markup Language</li>
          <li className="text-sm p-3 border border-slate-300 rounded-md cursor-pointer">B :Hypertext Markup Language</li>
          <li className="text-sm p-3 border border-slate-300 rounded-md cursor-pointer">C :Hypertext Markup Language</li>
          <li className="text-sm p-3 border border-slate-300 rounded-md cursor-pointer">D :Hypertext Markup Language</li>
        </ul>
        <div className="py-3 flex items-center justify-end">
          <button className="px-12 py-2 rounded-md bg-[#2dcca5]">Next</button>
        </div>
        <div>1 out of 5</div>
      </div>
    </div>
  );
};

export default Quiz;
