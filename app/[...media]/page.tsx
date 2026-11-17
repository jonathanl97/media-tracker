import Image from "next/image";

//page for movie/tv show
//change structure to media/[...item]? movie//[...item] tv//[...item]

export default function MediaPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Image
          src={"/movieposter.jpg"}
          alt="Poster"
          height={300}
          width={300}
        ></Image>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h2>Title</h2>
            <p>Year</p>
          </div>
          <p>Rating</p>
          <p>Summary</p>
        </div>
        <p>Where to watch</p>
      </div>
      <div>Episodes hide/show</div>
      <div>Actors</div>
      <div>Related movies</div>
    </div>
  );
}
