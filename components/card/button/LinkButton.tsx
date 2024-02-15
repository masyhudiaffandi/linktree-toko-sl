import React from 'react'
import { Toko, cardStyles, cardBody, cardName, cardButton } from "./buttonReources"
import {Card, Button, Avatar} from "@nextui-org/react"

const LinkButton = () => {
  const openLink = (link: string | URL | undefined) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {Toko.map((toko) => (
        <Card key={toko.name} className={cardStyles}>
          <div className={cardBody}>
            <Avatar src={toko.image} size="lg"/>
            <div className={cardName}>
              <h4>{toko.name}</h4>
            </div>
            <Button
              radius="full"
              className={cardButton}
              onClick={() => openLink(toko.link)}
            >
              Buka
            </Button>
          </div>
        </Card>
      ))}
    </>
  );
};

export default LinkButton;
