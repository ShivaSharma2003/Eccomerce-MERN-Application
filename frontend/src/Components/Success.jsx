import React from "react";

const Success = ({ title, Message }) => {
  return (
    <>
      <div className="bg-green-300 border border-green-600 h-[5rem] p-4 flex items-center justify-center flex-col gap-2 rounded-lg">
        <h1 className="font-bold text-green-500 text-md">{title}</h1>
        <p className="text-xs text-green-800 font-bold ">{Message}</p>
      </div>
    </>
  );
};

export default Success;
