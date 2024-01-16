"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import cn from "@/utils/cn";
import Link from "next/link";

type TNavMenuItem = {
  name: string;
  path: string;
};

type TNavMenu = {
  routes: TNavMenuItem[];
};

export default function NavMenu({ routes }: TNavMenu) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="rounded-md px-2 py-1 text-base-500 transition-colors hover:text-base-100 md:hidden">
          {({ open }) => (
            <svg
              viewBox="0 0 24 18"
              className={cn("w-6 fill-none", open && "text-base-100")}
            >
              <path
                className="stroke-current stroke-2"
                d="M2,4L22,4M12,14L22,14"
                strokeLinecap="round"
              />
            </svg>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-[10px] bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1">
            {routes.map((route, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <Link
                    href={route.path}
                    className={`${
                      active ? "bg-base-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {route.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
