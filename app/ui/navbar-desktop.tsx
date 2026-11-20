import { HomeIcon } from "@heroicons/react/24/outline";
import NavLinks, { AboutLink } from "./nav-links";
import { Suspense } from "react";
import Link from "next/link";

export default function NavbarDesktop() {
  return (
    <div className="bg-element/90 fixed top-0 right-0 left-0 z-10 m-2 hidden flex-row justify-between rounded-full px-8 py-2 lg:flex">
      <Link
        className="my-auto flex flex-row items-center text-center"
        href={"/"}
      >
        <HomeIcon className="mr-4 h-12 w-12" />
        <h1>Media Tracker</h1>
      </Link>
      <div className="flex w-100 cursor-auto justify-between px-4">
        <Suspense>
          <NavLinks />
        </Suspense>
      </div>
      <div className="flex">
        <Suspense>
          <AboutLink />
        </Suspense>
      </div>
    </div>
  );
}
