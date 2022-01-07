import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="flex py-7 px-2 pr-4 cursor-pointer rounded-lg hover:opacity-80 hover:shadow-xl transition duration-200 ease-out first:border-t active:scale-95 active:bg-gray-100">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        {
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        }
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-5 cursor-pointer hover:text-gray-700 transition duration-200 ease-out" />
        </div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
