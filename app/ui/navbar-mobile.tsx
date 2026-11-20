import { Suspense } from "react";
import NavLinks from "./nav-links";

export default function NavbarMobile() {
  return (
    <div className="bg-element/90 fixed right-0 bottom-0 left-0 m-2 flex flex-row justify-between rounded-full px-10 py-2 md:px-40 lg:hidden">
      <Suspense>
        <NavLinks />
      </Suspense>
    </div>
  );
}
