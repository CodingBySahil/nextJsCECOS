import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-cyan-400 p-16">
        <div className="bg-white p-16 rounded-3xl shadow-2xl shadow-cyan-950 w-4/5">
            <h2 className="text-center font-bold text-gray-600 text-3xl mb-6">Top Clients</h2>
            <div className=" flex justify-around flex-wrap w-full">
            <Image width={150} height={150} alt="Logo1" src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_200/v1628614672/logos/safe_x5alme.png" />
            <Image width={150} height={150} alt="Logo2" src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_300/v1628614672/logos/circleai_dm9slt.png" />
            <Image width={150} height={150} alt="Logo3" src="https://res.cloudinary.com/thirus/image/upload/v1628617465/logos/onpoint_bikaaj.png" />
            <Image width={150} height={150} alt="Logo4" src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_180/v1628617514/logos/Thirus_Logo_Tentative_twhvic.png" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Page;
