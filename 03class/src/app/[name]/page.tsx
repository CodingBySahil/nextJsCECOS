// "use client";
import React from "react";

export async function generateStaticParams() {
    return[
        {name:'Zia'},
        {name:'Khubaib'},
        {name:'Sajid'}
    ]
}
const Page = (props: { params: { name: string } }) => {
  console.log(props);

  return <div>{props.params.name} other profiles page</div>;
};

export default Page;
