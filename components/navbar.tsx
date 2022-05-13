import Link from "next/link";
import { useState } from "react";

const main_nav =
  "lg-inline-flex lg:w-auto w-full px-3 py-2 text-lg rounded text-white font-bold items-center justify-center hover:bg-green-600";
const back_nav =
  "lg-inline-flex lg:w-auto w-full px-3 py-2 text-lg rounded text-white font-bold items-center justify-center bg-green-600 hover:bg-green-700 mr-1";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap bg-stone-900 p-3">
      <Link href="/">
        <a className="inline-flex items-center p-1 mr-4">
          <span className="text-5xl h-8 w-full mr-1">
            <span className="text-green-600">Album</span>-a-
            <span className="text-green-600">Day</span>
          </span>
        </a>
      </Link>
      <button
        className="inline-flex p-3 hover:bg-orange-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/current">
            <a className={main_nav}>Current Album</a>
          </Link>
          <Link href="/list">
            <a className={main_nav}>Album List</a>
          </Link>
        </div>
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          <Link href="/add">
            <a className={back_nav}>Add an Album</a>
          </Link>
          <Link href="/about">
            <a className={back_nav}>About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
