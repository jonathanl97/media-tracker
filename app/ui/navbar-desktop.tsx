import { HomeIcon } from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";
import { Suspense } from "react";

//maybe rename to top bar and use on both desktop and mobile with different elements.

export default function NavbarDesktop() {
  return (
    <div className="bg-element m-2 flex flex-row justify-between rounded-full px-4 py-2">
      <div className="my-auto flex flex-row items-center text-center">
        <HomeIcon className="mr-4 h-12 w-12" />
        <h1>Name</h1>
      </div>
      <div className="flex w-100 cursor-auto justify-between px-4">
        <Suspense>
          <NavLinks />
        </Suspense>
      </div>
      <div></div>
    </div>
  );
}
