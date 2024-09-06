import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const Page = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-cyan-400 p-16">
        <div className="bg-white p-8 rounded-3xl h-96 w-96 flex flex-col justify-between items-start shadow-2xl shadow-cyan-950">
          <FaQuoteLeft color="blue" size={35} />
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            doloribus nulla illo non autem eos provident sed accusantium saepe
            adipisci! lorem ipsum tox
          </p>
          <h2 className="font-bold text-xl">Author Name</h2>
        </div>
      </div>
    </>
  );
};

export default Page;
