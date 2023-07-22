"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";
interface SidebarProp {
  songs: Song[];
  children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProp> = ({ children, songs }) => {
  const pathName = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiIcons.HiHome,
        label: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: BiIcons.BiSearch,
        label: "Search",
        active: pathName === "/search",
        href: "/search",
      },
    ],
    [pathName]
  );
  return (
    <div className="flex h-full">
      <div
        className="
              hidden
              md:flex
              flex-col
              gap-y-2
              bg-black
              h-full
              w-[300px]
              p-2
              "
      >
        <Box>
          <div
            className="
              flex
              flex-col
              gap-y-4
              px-5
              py-4
              "
          >
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full w-full overflow-y-auto py-2 mr-2">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
