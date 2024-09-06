import Image from "next/image";
import React from "react";
let data = [
  {
    url:"/girl.jpeg",
    name:"Alexa Kardi",
    decription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quibusdam incidunt amet ea eos saepe fugit perspiciatis voluptas error animi magnam"
  },
  {
    url:"/girl.jpeg",
    name:"Alexa Kardi",
    decription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quibusdam incidunt amet ea eos saepe fugit perspiciatis voluptas error animi magnam"
  },
  {
    url:"/girl.jpeg",
    name:"Alexa Kardi",
    decription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quibusdam incidunt amet ea eos saepe fugit perspiciatis voluptas error animi magnam"
  },
  {
    url:"/girl.jpeg",
    name:"Alexa Kardi",
    decription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quibusdam incidunt amet ea eos saepe fugit perspiciatis voluptas error animi magnam"
  },
]

const Page = () => {
  return (
    <>
      <div className="w-full h-screen flex  justify-center items-center bg-cyan-400 p-16">
        <div className="bg-white p-8 rounded-3xl flex flex-col justify-between items-stretch gap-8 shadow-2xl">
          {data.map((data,index)=>(
          <div className="flex gap-8 even:flex-row-reverse even:text-right">
            <Image src={data.url} alt="girl pic" width={150} height={150} />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <h5 className="text-xl font-normal text-gray-700">
                Founder and CEO
              </h5>
              <p className="text-xl w-96 mt-6">
                {data.decription}
              </p>
            </div>
          </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
