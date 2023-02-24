import React from "react";

const Error = ({ title, Message }) => {
  return (
    <>
      <div className="bg-red-300 border border-red-600 h-[5rem] p-4 flex items-center justify-center flex-col gap-2 rounded-lg">
        <h1 className="font-bold text-red-500 text-md">{title}</h1>
        <p className="text-xs text-red-800 font-bold ">{Message}</p>
      </div>
    </>
  );
};

export default Error;
