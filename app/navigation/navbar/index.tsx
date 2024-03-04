import React from "react";
import Link from "next/link";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-16 bg-black sticky top-0 border-b-2 border-neutral-800">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center h-full">
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>

            <h1 className="text-4xl sm:text-7xl font-extrabold relative z-20 bg-clip-text py-8 tracking-widest scale-50">
              Fuze
              <span className="text-black text-4xl font-bold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:bg-white ms-2 relative top-[-0.15em] tracking-normal">
                ai
              </span>
            </h1>
            <ul className="hidden md:flex float:right gap-x-6 text-neutral-400 ">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <p>Gallery</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

