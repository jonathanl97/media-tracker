import { Metadata } from "next";
import MediaCard from "../ui/media-card";
import Search from "../ui/search";

export const metadata: Metadata = {
  title: "Search",
};

//map results and pass object to itemcard

//maybe move search component to this page

//move trending and discover to seperate page? or overwrite when search is active
export default function Page() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="mt-2 mb-4 lg:mt-0">Search</h1>
        <Search />
      </div>
      <div className="flex flex-row flex-wrap justify-between lg:justify-normal">
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
      <div>
        <h2>Trending</h2>
      </div>
    </>
  );
}
