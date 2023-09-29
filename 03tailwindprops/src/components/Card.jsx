import React from 'react'

function Card({username,btnText='visit me'}) {
  console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1659771031415-d4800c29a9b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div  className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div  className="absolute bottom-4 left-4 text-left">
    <h1  className="text-lg font-semibold text-white">{username}</h1>
    <p  className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button  className=" bg-black mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
     {btnText} →
    </button>
  </div>
</div>
  )
}

export default Card