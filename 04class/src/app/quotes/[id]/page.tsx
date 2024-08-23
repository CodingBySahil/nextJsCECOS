
import React from 'react'

const Page = (props:{ params: { id: string }, searchParams: {} }) => {
  // console.log(props);
  
  return (
    <div>This page having URL is http://localhost:3000/quotes/{props.params.id}</div>
  )
}

export default Page