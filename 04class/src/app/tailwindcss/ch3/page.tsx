import React from "react";

const Page = () => {
  return (
    <>
      {/*this class comes from globel css I have created using @layer @apply */}
      {/* <h1 className="mainHeader">This is Tailwind Chapter 3 designs page</h1> */}
      <h1 className="mt-10 text-center font-bold bg-green-800 text-[8px] xs:text-[16px] xs:bg-slate-800 sm:text-[24px] sm:bg-red-800 sml:text-[32px] sml:bg-red-200 md:text-[40px] md:bg-yellow-300 mdl:text-[48px] mdl:bg-yellow-500 lg:text-[56px] lg:bg-yellow-900 lgl:text-[64px] lgl:bg-teal-600 xl:text-[72px] xl:bg-red-950 xl:text-white">
        This is heading 1
      </h1>
      <div className="bg-pink-400">
        <h2 className="bg-clip-text p-4 text-center text-9xl font-bold text-transparent">
          Text styling
        </h2>
      </div>

      <h3 className="first-letter:text-9xl first-letter:font-bold first-line:text-2xl p-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta suscipit
        quaerat non! Ad dolorum, quaerat ipsam ipsa esse fugit vero architecto
        adipisci magnam! Minus eveniet alias voluptatum excepturi voluptatibus
        error?
      </h3>

      <div >
        <ul className="m-20">
          <li className="list-disc list-inside ">list-disc list-inside</li>
          <li className="list-disc list-inside">list-disc list-inside</li>
          <li className="list-disc list-inside">list-disc list-inside</li>
          <li className="list-disc list-inside">list-disc list-inside</li>
        </ul>
        <ul className="m-20">
          <li className="list-decimal list-outside ">list-decimal list-outside</li>
          <li className="list-decimal list-outside">list-decimal list-outside</li>
          <li className="list-decimal list-outside">list-decimal list-outside</li>
          <li className="list-decimal list-outside">list-decimal list-outside</li>
        </ul>
        <ol className="m-20">
          <li className="list-decimal list-outside ">list-decimal list-outside</li>
          <li className="list-decimal list-outside">list-decimal list-outside</li>
          <li className="list-decimal list-outside">list-decimal list-outside</li>
          <li className="list-decimal list-outside">list-decimal list-outside</li>
        </ol>
        <ol className="m-20">
          <li className="list-none">list-none</li>
          <li className="list-none">list-none</li>
          <li className="list-none">list-none</li>
          <li className="list-none">list-none</li>
        </ol>
        
      </div>
    </>
  );
};

export default Page;
