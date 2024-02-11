"use client"

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-black h-[100vh]">
        <h1>Ini content</h1>
      </div> 
    </>
  )
 
}
