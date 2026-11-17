import Image from "next/image";
import { BookmarkIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import {
  BookmarkIcon as BookmarkIconSolid,
  CheckCircleIcon as CheckCircleIconSolid,
} from "@heroicons/react/24/solid";
import Link from "next/link";

//bookmarkslash on hover?

//receive movie/tv object from parent
//add conditional extra row for tvshows with episode count and seasons?
//make separate card for tv shows?
export default function MediaCard() {
  return (
    <Link href={"/...media/page.tsx"} className="m-2">
      <div className="bg-element relative w-40 overflow-hidden rounded-2xl lg:w-50">
        <div className="relative">
          <Image
            src={"/movieposter.jpg"}
            alt="Poster"
            width={300}
            height={300}
          ></Image>
          <div className="bg-element/80 absolute bottom-0 flex w-full flex-row items-center justify-between p-1.5">
            <h3 className="">Interstellar</h3>
            <p className="font-light">Year</p>
          </div>
        </div>
        <div className="m-1.5 flex flex-row justify-between">
          <button className="h-10 w-10 rounded-full bg-black p-1">
            <CheckCircleIcon />
          </button>
          <button className="h-10 w-10 rounded-full bg-black p-1">
            <BookmarkIcon />
          </button>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black p-1 text-center">
            <p>10</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
