import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { TvStatusBadge } from "../ui/badges";

//page for movie/tv show
//change structure to media/[...item]? movie//[...item] tv//[...item]

//collapsible sections? actors, episodes, related etc.

export default function Page() {
  return (
    <div className="mt-4 flex flex-col">
      <div className="mb-2 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        <div className="flex w-full flex-row justify-between lg:w-1/5">
          <button className="bg-element/90 size-8 rounded-full p-1 lg:hidden">
            <ArrowLeftIcon />
          </button>
          <Image
            className="mb-2 w-48 rounded-xl lg:mr-2 lg:mb-0 lg:w-full"
            src={"/movieposter.jpg"}
            alt="Poster"
            height={300}
            width={300}
          />
          <div className="size-8 lg:hidden"></div>
        </div>
        <div className="bg-element/90 flexflex-col my-2 w-full rounded-xl p-2 lg:mx-2 lg:my-0 lg:w-3/5">
          <div className="flex flex-row items-baseline justify-between">
            <h2>Title</h2>
            <p>Year + date</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Rating</p>
            <TvStatusBadge statusText={"Ended"} />
          </div>
          <p>Genres</p>
          <p>Summary</p>
        </div>
        <div className="bg-element/90 mt-2 w-full rounded-xl p-2 lg:mt-0 lg:ml-2 lg:w-1/5">
          <p>Where to watch</p>
        </div>
      </div>
      <div className="bg-element/90 my-2 rounded-xl p-2">
        Episodes hide/show
      </div>
      <div className="bg-element/90 my-2 rounded-xl p-2">Actors</div>
      <div className="bg-element/90 my-2 rounded-xl p-2">Related movies</div>
    </div>
  );
}
