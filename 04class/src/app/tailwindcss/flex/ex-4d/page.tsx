import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-cyan-400 p-16">
        <div className="bg-white p-8 rounded-3xl ">
          <h1 className="xs:text-xl sml:text-2xl md:text-3xl lg:text-3xl lgl:text-4xl xl:text-6xl font-bold font-serif text-rose-600 text-center mb-10">
            Frequent <span className="text-black">Questions</span>
          </h1>
          <div>
            <div className="flex justify-between items-start">
              <h1 className="bg-rose-600 text-white font-bold text-3xl rounded-xl min-w-10 min-h-10 text-center">
                1
              </h1>
              <div className="ml-8">
                <h1 className="font-bold text-xl mb-1">
                  Question Lorem ipsum dolor sit amet.
                </h1>
                <p className="w-9/12">
                  answers Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Exercitationem, incidunt!
                  answers Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Exercitationem, incidunt!
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <h1 className="bg-rose-600 text-white font-bold text-3xl rounded-xl min-w-10 min-h-10 text-center">
                2  
              </h1>
              <div className="ml-8">
                <h1 className="font-bold text-xl mb-1">
                  Question Lorem ipsum dolor sit amet.
                </h1>
                <p className="w-9/12">
                  answers Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Exercitationem, incidunt!
                  answers Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Exercitationem, incidunt!
                </p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <h1 className="bg-rose-600 text-white font-bold text-3xl rounded-xl min-w-10 min-h-10 text-center">
                3
              </h1>
              <div className="ml-8">
                <h1 className="font-bold text-xl mb-1">
                  Question Lorem ipsum dolor sit amet.
                </h1>
                <p className="w-9/12">
                  answers Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Exercitationem, incidunt!
                  answers Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Exercitationem, incidunt!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
