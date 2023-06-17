import {
  HomeIcon,
  ListBulletIcon,
  RectangleGroupIcon,
  Square3Stack3DIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import React from "react";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Items",
    href: "/items",
    icon: <RectangleGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Admin Customers List",
    href: "/customers_list",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Admin Order List",
    href: "/order_list",
    icon: <ListBulletIcon className="w-6 h-6" />,
  },
  {
    label: "Admin Product List",
    href: "/product_list",
    icon: <Square3Stack3DIcon className="w-6 h-6" />,
  },
  
];
