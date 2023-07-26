import React from "react";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import Ad1 from "../../public/assets/ad-1.jpg";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className="w-full">
      <nav className="bg-wh-900 text-white">
        <div className="w-3/6 flex justify-between items-center pl-10 py-4">
          <div className="hidden sm:block">
            <SocialLinks />
          </div>
          <div className="flex sm:translate-x-2/4 gap-6">
            <Link href={"/"}>Home</Link>
            <span>Trending</span>
            <span>About</span>
          </div>
        </div>
      </nav>
      <div className="flex w-11/12 mx-auto gap-8 mt-5 mb-4">
        <div className="basis-2/3 md:mt-3">
          <h4 className="font-bold text-3xl md:text-6xl">Blog AI Zone</h4>
          <p className="mt-3">
            Blog dedicated towards AI and generation and job automation
          </p>
        </div>
        {/* // ? Here we use relative because the image componet when we use fill the position of the image component is absolute */}
        <div className="relative basis-full w-auto h-32 bg-wh-500">
          <Image
            fill
            alt="advert-1"
            placeholder="blur"
            src={Ad1}
            sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <hr className="border-1 w-11/12 mx-auto my-4 " />
    </header>
  );
};

export default NavBar;
