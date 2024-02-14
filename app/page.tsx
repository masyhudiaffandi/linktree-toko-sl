"use client"

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Card from "../components/card/Card";


export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="bg-black h-[100vh]">
        <div className="card-container flex justify-center items-center">
          <Card />
        </div>
      </div> 
    </main>
  )
 
}
