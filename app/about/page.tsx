import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <>
      <h1 className="mb-4">About</h1>
      <div
        className={
          "flex flex-row items-center justify-between lg:justify-center"
        }
      >
        <Link
          className="flex h-12 w-18 justify-center"
          href={"https://www.themoviedb.org/"}
        >
          <Image src="/TMDB.svg" width={36} height={36} alt="TMDB Logo" />
        </Link>

        <p className="ml-2 w-auto text-sm lg:m-0 lg:text-lg">
          This product uses the TMDB API but is not endorsed or certified by{" "}
          <Link
            className="bg-linear-to-r from-[#90cea1] to-[#01b4e4] bg-clip-text text-transparent"
            href={"https://www.themoviedb.org/"}
          >
            TMDB
          </Link>
          .
        </p>
      </div>
    </>
  );
}
