import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand className="flex items-center w-full">
        <p className="font-bold text-inherit text-center">TokoSL</p>
      </NavbarBrand>
    </Navbar>
  );
}
