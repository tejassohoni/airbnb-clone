import Image from "next/image";

export default function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-10">
        <h3 className="text-4xl mb-3 w-60">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-5 py-3 mt-5 rounded-lg cursor-pointer shadow-sm hover:shadow-xl hover:scale-105 active:scale-95 active:bg-gray-800 transform transition duration-200 ease-out">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
