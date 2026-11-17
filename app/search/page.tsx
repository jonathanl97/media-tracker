import { Metadata } from "next";
import MediaCard from "../ui/media-card";

export const metadata: Metadata = {
  title: "Search",
};

//add margin above heading. maybe add top bar or just logo in corner

//map results and pass object to itemcard
export default function Page() {
  return (
    <>
      <h1 className="mb-4">Search</h1>
      <div className="flex flex-row flex-wrap justify-between lg:justify-normal">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </>
  );
}
