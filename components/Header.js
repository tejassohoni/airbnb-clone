import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

export default function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div>
      <header className="grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        <div
          className="relative flex items-center h-10 cursor-pointer my-auto"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
          <input
            type="text"
            placeholder={placeholder || "Start Your Search"}
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchIcon
            className="hidden md:inline-flex h-8 bg-red-400 
          text-white rounded-full p-2 cursor-pointer md:mx-2 hover:bg-red-500 transition duration-500"
          />
        </div>
        <div className="flex space-x-4 items-center justify-end">
          <p className="hidden md:inline cursor-pointer hover:text-gray-500 transition duration-500">
            Become A Host
          </p>
          <GlobeAltIcon className="h-6 text-gray-500 hover:text-gray-700 transition duration-500 cursor-pointer" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className="h-6 text-gray-500 cursor-pointer hover:text-gray-700 transition duration-500" />
            <UserCircleIcon className="h-6 text-gray-500 cursor-pointer hover:text-gray-700 transition duration-500" />
          </div>
        </div>
        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto mt-5">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b">
              <h2 className="text-2xl flex-grow font-semibold">
                Number Of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                type="number"
                min={1}
                className="w-12 pl-2 text-lg outline-none text-red-400"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
              ></input>
            </div>
            <div className="flex mt-5">
              <button
                onClick={resetInput}
                className="flex-grow text-gray-500 hover:text-gray-400 transition duration-200 ease-out"
              >
                Cancel
              </button>
              <button
                onClick={search}
                className="flex-grow text-red-500 hover:text-red-400 transition duration-200 ease-out"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
