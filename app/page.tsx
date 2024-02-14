"use client"

import { Button } from "@nextui-org/react";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Card from "../components/card/Card";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-[396px] left-1/2 w-32 h-48 bg-green-500 rounded-full mix-blend-screen opacity-50 filter blur-[90px]"></div>
            <div className="absolute top-[28px] right-1/4 w-64 h-48 bg-pink-500 rounded-full mix-blend-screen opacity-50 filter blur-[90px]"></div>
          </div>
        </div>
        <div className="card-container flex justify-center items-center mt-8">
          <Card />
        </div>
      </div>
    </main>
  );
}



