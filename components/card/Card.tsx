import React from "react";
import {Card, CardFooter, Image, Button, CardHeader, Avatar, CardBody} from "@nextui-org/react";

const Toko = [
  {
    "name": "Shopee",
    "link": "www.shopee.com",
    "image": "/public/toko.png"
  },
  {
    "name": "TikTok Shop",
    "link": "www.tiktok.com",
    "image": "/public/toko.png"
  },
  {
    "name": "TokoPedia",
    "link": "www.tokopedia.com",
    "image": "/public/toko.png"
  },
  {
    "name": "Lazada",
    "link": "www.lazada.com",
    "image": "/public/toko.png"
  }
]

export default function App() {
  return (
    // map TOKO
    <div className="flex flex-col justify-center items-center gap-4 w-[100vh]">
      {Toko.map((toko) => (
        <Card key={toko.name} className="max-w-[340px] flex justify-between items-center w-[100vw] py-3 rounded-full">
          <div className="flex items-center justify-between gap-10">
            <Avatar src={toko.image} size="lg"/>
            <div className="nama w-22">
              <h4>{toko.name}</h4>
            </div>
            <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500  text-white shadow-lg">
              <a href={toko.link} target="_blank">Buka</a>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
