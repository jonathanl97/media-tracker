import clsx from "clsx";

export function TvStatusBadge({ statusText }: { statusText: string }) {
  return (
    <div
      className={clsx("flex items-center rounded-full px-1", {
        "bg-green-500": statusText == "Returning",
        "bg-blue-500": statusText == "Ended",
        "bg-red-500": statusText == "Cancelled",
      })}
    >
      <p className="text-sm">{statusText}</p>
    </div>
  );
}

export function GenreBadge({ genre }: { genre: string }) {
  return (
    <div className="flex items-center rounded-full px-1">
      <p>{genre}</p>
    </div>
  );
}
