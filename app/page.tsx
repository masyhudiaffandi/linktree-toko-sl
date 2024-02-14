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
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-pink-500 transform rotate-45 rounded-full blur-md mix-blend-screen opacity-50 animate-aurora"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-pink-500 transform -rotate-45 rounded-full blur-md mix-blend-screen opacity-50 animate-aurora"></div>
        </div>
        <div className="card-container flex justify-center items-center">
          <Card />
        </div>
      </div>
    </main>
  );
}

