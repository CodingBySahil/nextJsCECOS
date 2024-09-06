import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-cyan-400 p-16">
        <div className="bg-white p-8 rounded-3xl h-[40rem] w-80 flex flex-col items-center justify-center shadow-2xl shadow-cyan-950">
          <button className="bg-blue-700 text-white px-4 py-2 rounded-2xl w-56 my-2 cursor-pointer">LogIn</button>
          <button className="text-blue-700 border border-blue-700 px-4 py-2 rounded-2xl w-56 my-2 cursor-pointer">SignUp</button>
        </div>
      </div>
    </>
  );
};

export default Page;
