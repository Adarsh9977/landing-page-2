import { RiArrowRightLine, RiMenuLine } from "@remixicon/react";
import Logo from "@/assets/logosaas.png"
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity </p>
        <div className="inline-flex gap-1 items-center ">
          <p>Get started for free</p>
          <RiArrowRightLine className="h-4 w-4 inline-flex justify-center items-center"/>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between overflow-x-hidden">
            <Image src={Logo} alt="Logo" height={40} width={40}/>
            <RiMenuLine className="h-5 w-5 text-black md:hidden"/>
            <nav className="hidden md:flex items-center gap-6 text-black/60">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-gray-900  rounded-lg font-medium inline-flex items-center justify-center px-4 py-2 text-white tracking-tight">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header> 
  )
};
