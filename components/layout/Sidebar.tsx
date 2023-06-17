import {
  ArrowRightOnRectangleIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronUpDownIcon,
  UserCircleIcon
} from "@heroicons/react/24/outline";
import { Button, ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from "@mui/material";
import Popover from '@mui/material/Popover';
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { defaultNavItems, NavItem } from "./defaultNavItems";

// add NavItem prop to component prop
type Props = {
  collapsed: boolean;
  navItems?: NavItem[];
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};
const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
}: Props) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div
      className={classNames({
        "bg-indigo-700 text-zinc-50 fixed md:static md:translate-x-0 z-20":
          true,
        "transition-all duration-300 ease-in-out": true,
        "w-[300px]": !collapsed,
        "w-16": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={classNames({
          "flex flex-col justify-between h-screen sticky inset-0 w-full": true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            "flex items-center border-b border-b-indigo-800 transition-none":
              true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          {!collapsed && <span className="whitespace-nowrap">My Logo</span>}
          <button
            className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full opacity-0 md:opacity-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-grow">
          <ul
            className={classNames({
              "my-2 flex flex-col gap-2 items-stretch": true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "text-indigo-100 hover:bg-indigo-900 flex": true, //colors
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                    "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                  })}
                >
                  <Link href={item.href} className="flex gap-2">
                    {item.icon} <span>{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          <div
            className={classNames({
              "grid place-content-stretch p-3 ": true,
            })}
          >
            <div className="flex gap-4 items-center h-11 overflow-hidden">
              <Image
                src={
                  "https://anirban-baisya.github.io/My-Portfolio/Images/hero-section.png"
                }
                height={66}
                width={66}
                alt="profile image"
                className="rounded-full"
              />
              {!collapsed && (
                <div className="flex flex-col ">
                  <span className="text-indigo-50 my-0">Anirban Baisya</span>
                  <Link href="/" className="text-indigo-200 text-sm">
                    Admin
                  </Link>
                </div>
              )}
            </div>
          </div>
          <ChevronUpDownIcon className="h-6 w-6 text-white mx-1" />

        </Button>


        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >

          <Paper sx={{ width: 200, maxWidth: '100%' }}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <UserCircleIcon className="h-6 w-6 text-gray-500" />

                </ListItemIcon>
                <ListItemText>My Profile</ListItemText>

              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ArrowRightOnRectangleIcon className="h-6 w-6 text-gray-500" />
                </ListItemIcon>
                <Link  href={'/login'}> 
                  <ListItemText >Logout</ListItemText>
                </Link>

              </MenuItem>

            </MenuList>
          </Paper>

        </Popover>

      </div>
    </div>
  );
};
export default Sidebar;
