import React from "react"

import AppleLoopLogo from "Assets/images/icon.svg"

export default function IndexPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden grid justify-items-center">
      <div className="absolute z-20 self-center w-24 md:w-28">
        <img src={AppleLoopLogo}></img>
      </div>
      <div className="absolute w-full h-full z-10 filter opacity-40 bg-gradient-to-tr from-black to-transparent"></div>

      <div className="absolute z-20 left-3 bottom-6 w-full sm:w-3/4 grid gap-3 p-5 text-gray-50 tracking-widest">
        <span className="text-4xl font-black">Welcome</span>
        <div className="tracking-wide flex flex-row justify-start gap-2">
          <span className="font-light uppercase self-center">to</span>
          <span className="text-2xl font-black self-end">Apple Loop Music</span>
        </div>
      </div>

      <img
        className="w-full h-full object-cover"
        src="https://source.unsplash.com/user/jeremythomasphoto/rMmibFe4czY/1920x2880"
        alt="dark-starry-night"
      ></img>
    </div>
  )
}
