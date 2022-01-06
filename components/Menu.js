import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const options = [
  { name: "Cancellation Flexibility" },
  { name: "Type Of Place" },
  { name: "Price" },
  { name: "Rooms and Beds" },
  { name: "More Filters" },
];

export default function Example() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className="relative border shadow-md hover:shadow-lg w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg cursor-pointer active:scale-95 
          outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm transition duration-200 ease-out"
          >
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition duration-200 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute  py-1 mt-1 overflow-auto text-base bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-white bg-red-400"
                        : "text-gray-900 active:text-sm"
                    }
                          cursor-pointer select-none relative py-2 pl-10 pr-4 rounded-md`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span
                          className={`
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
