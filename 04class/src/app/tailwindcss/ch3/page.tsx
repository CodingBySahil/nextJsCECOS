import React from "react";

const Page = () => {
  return (
    <>
      {/*this class comes from globel css I have created using @layer @apply */}
      {/* <h1 className="mainHeader">This is Tailwind Chapter 3 designs page</h1> */}
      <h1 className="mt-10 text-center font-bold bg-green-800 text-[8px] xs:text-[16px] xs:bg-slate-800 sm:text-[24px] sm:bg-red-800 sml:text-[32px] sml:bg-red-200 md:text-[40px] md:bg-yellow-300 mdl:text-[48px] mdl:bg-yellow-500 lg:text-[56px] lg:bg-yellow-900 lgl:text-[64px] lgl:bg-teal-600 xl:text-[72px] xl:bg-red-950 xl:text-white">
        This is heading 1
      </h1>
    </>
  );
};

export default Page;
