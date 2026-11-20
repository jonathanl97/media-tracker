import { Metadata } from "next";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Page() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h1>Profile</h1>
        <Link href={"/profile/settings"} className="mr-1 size-8">
          <Cog8ToothIcon />
        </Link>
      </div>
    </div>
  );
}
