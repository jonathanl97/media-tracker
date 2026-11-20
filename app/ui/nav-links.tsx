"use client";

import Link from "next/link";
import clsx from "clsx";
import {
  HomeIcon,
  BookmarkIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  BookmarkIcon as BookMarkIconSolid,
  UserCircleIcon as UserCircleIconSolid,
  MagnifyingGlassIcon as MagnifyingGlassIconSolid,
  QuestionMarkCircleIcon as QuestionMarkCircleIconSolid,
  InformationCircleIcon as InformationCircleIconSolid,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/", icon: HomeIcon, activeIcon: HomeIconSolid },
  {
    name: "Watchlist",
    href: "/watchlist",
    icon: BookmarkIcon,
    activeIcon: BookMarkIconSolid,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserCircleIcon,
    activeIcon: UserCircleIconSolid,
  },
  {
    name: "Search",
    href: "/search",
    icon: MagnifyingGlassIcon,
    activeIcon: MagnifyingGlassIconSolid,
  },
];

const aboutLink = {
  name: "About",
  href: "/about",
  icon: QuestionMarkCircleIcon,
  activeIcon: QuestionMarkCircleIconSolid,
};

export function AboutLink() {
  const pathname = usePathname();

  return (
    <Link
      href={aboutLink.href}
      className={clsx(
        "hover:text-primary-400 flex h-12 cursor-pointer flex-col justify-center text-sm font-semibold",
        {
          "text-primary-400": pathname == aboutLink.href,
        },
      )}
    >
      {pathname == aboutLink.href ? (
        <aboutLink.activeIcon className="h-10" />
      ) : (
        <aboutLink.icon className="h-10" />
      )}
      <p className="hidden lg:flex">{aboutLink.name}</p>
    </Link>
  );
}

export default function NavLinks() {
  const pathname = usePathname();
  let LinkIcon: typeof HomeIcon;

  return (
    <>
      {links.map((link) => {
        if (pathname == link.href) {
          LinkIcon = link.activeIcon;
        } else {
          LinkIcon = link.icon;
        }

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "hover:text-primary-400 flex h-12 cursor-pointer flex-col text-sm font-semibold",
              {
                "text-primary-400": pathname == link.href,
              },
            )}
          >
            <LinkIcon />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
