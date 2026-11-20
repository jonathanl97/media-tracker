"use client";

import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Search() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <input
          className="bg-element/90 h-9 w-100 rounded-full px-4"
          placeholder="Search"
          onChange={(e) => {
            e.target.value;
          }}
        ></input>
        <button className="bg-element/90 ml-2 size-9 rounded-full p-1">
          <MagnifyingGlassIcon />
        </button>
        <button className="bg-element/90 ml-2 size-9 rounded-full p-1">
          {" "}
          <AdjustmentsHorizontalIcon />
        </button>
      </div>
    </div>
  );
}
