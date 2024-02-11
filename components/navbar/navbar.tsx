import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return(
    <Navbar>
      <div className="text-center flex w-full items-center justify-center">
        <NavbarItem className={ "background-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" }>
          <h1>Toko SL</h1>
        </NavbarItem>
      </div>
    </Navbar>
  )
}
