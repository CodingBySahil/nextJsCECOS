import React from "react";
import { FaCamera, FaPen, FaVideo } from "react-icons/fa6";

const Page = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-cyan-400 p-16">
        <div className="bg-gray-500 p-8 rounded-3xl flex justify-between items-stretch gap-8">

          <div className="bg-white p-2 rounded-2xl flex flex-col justify-center items-center">
            <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center p-2">
              <FaCamera color="white" size={25} />
            </div>
            <h1 className="text-2xl font-bold text-gray-700">Photo Shoot</h1>
            <p className="text-center my-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </p>
          </div>
          <div className="bg-white p-2 rounded-2xl flex flex-col justify-center items-center">
            <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center p-2">
              <FaVideo color="white" size={25} />
            </div>
            <h1 className="text-2xl font-bold text-gray-700">Vedio Production</h1>
            <p className="text-center my-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              est adipisci officiis laboriosam 
            </p>
          </div>
          <div className="bg-white p-2 rounded-2xl flex flex-col justify-center items-center">
            <div className="bg-emerald-700 w-16 h-16 rounded-full flex items-center justify-center p-2">
              <FaPen color="white" size={25} />
            </div>
            <h1 className="text-2xl font-bold text-gray-700">Digital Illustration</h1>
            <p className="text-center my-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              est
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
