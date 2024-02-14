import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import './styles.css'

export default function App() {
  return (
    <Navbar className="navbar"> 
      <div className="text-center flex w-full items-center justify-center">
        <NavbarItem>
          <h1>Toko SL</h1>
        </NavbarItem>
      </div>
    </Navbar>
  );
}
