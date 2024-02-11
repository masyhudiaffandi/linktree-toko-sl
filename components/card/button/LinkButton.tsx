import React from 'react'
import {Button, ButtonGroup} from "@nextui-org/react";

const LinkToko = [
  {
    "name": "Shopee",
    "link": "www.shopee.com"
  },
  {
    "name": "Tokopedia",
    "link": "www.tokopedia.com"
  },
  {
    "name": "Lazada",
    "link": "www.lazada.com"
  },
  {
    "name": "TikTok Shop",
    "link": "www.tiktok.com"
  },
  {
    "name": "Grosir",
    "link": "web.whatsapp.com"
  }
]

const LinkButton = () => {
  return (
    <>
      {LinkToko.map((item) => (
        <Button
          key={item.name}
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          <a href={item.link}>{item.name}</a>
        </Button>
      ))}
    </>
  );
};

export default LinkButton
