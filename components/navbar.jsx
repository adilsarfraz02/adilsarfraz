import { ThemeSwitch } from "@/components/theme-switch";
import { Code, Tooltip } from "@nextui-org/react";

import React from "react";
export const Navbar = () => {
  return (
      <nav className="fixed top-0 right-0 p-6 w-fit z-20">
        <ThemeSwitch />
      </nav>

  );
};
