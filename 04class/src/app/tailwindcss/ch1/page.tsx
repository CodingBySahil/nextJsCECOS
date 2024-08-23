import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
    {/*this class comes from globel css I have created using @layer @apply */}
      <h1 className="mainHeader hover:bg-teal-900 "> 
        This is Tailwind Chapter 1 designs page
      </h1>
      <div className="flex justify-center gap-16 bg-gray-400 mt-4 p-8">
        <div className="text-center">
          <h1 className="text-7xl text-blue-700 font-bold mb-5 ">
            Welcome to NorthBy
          </h1>
          <h3 className="mb-5 text-blue-500 text-3xl font-bold">
            A premium high quality design
          </h3>
          <button className="rounded-lg text-white bg-blue-900 px-4 py-2">
            Click Me
          </button>
        </div>
        <div >
          <Image src="/ecademyLogo.png" alt="logo" width={200} height={200} />
        </div>
      </div>
    </>
  );
};

export default Page;
