"use client";

import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Logo from "./logo";



export default function Header() {
  return (
    <header className="px-2 bg-black flex justify-between items-center text-white">
      <IoMdMenu className="text-white p-2 size-12 hover:bg-gray-600" />
      <Logo />
      <IoSearch className="size-10 p-2" />
    </header>
  );
}
