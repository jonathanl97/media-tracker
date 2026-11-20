import { Metadata } from "next";
import { HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

//className="my-auto flex flex-row items-center text-center"

export default function Page() {
  return (
    <>
      <div className="mt-4 mb-2 flex flex-row items-center justify-between text-center lg:hidden">
        <div className="flex items-center">
          <HomeIcon className="mr-2 h-12 w-12" />
          <h1>Media Tracker</h1>
        </div>
        <Link href={"/about"} className="size-8">
          <QuestionMarkCircleIcon />
        </Link>
      </div>
      {/* <h1>Home</h1> */}
    </>
  );
}
