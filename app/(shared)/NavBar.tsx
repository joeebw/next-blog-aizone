import React from "react";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import Ad1 from "../../public/assets/ad-1.jpg";
import Link from "next/link";

const randome = () => {
  const trendigIdPostId: string[] = [
    "clk8nr03y0002ldimd0zeeg05",
    "clk8nqxj10000ldimrsh47m6l",
    "clk8nr03x0001ldimkudq92qi",
    "clk8nr04r0003ldimz4xd78g5",
  ];
  const randomIndex = Math.floor(Math.random() * trendigIdPostId.length);
  return trendigIdPostId[randomIndex];
};

const NavBar = () => {
  return (
    <header className="w-full">
      <nav className="bg-wh-900 text-white">
        <div className="sm:w-3/6 flex justify-between items-center pl-10 py-4">
          <div className="hidden sm:block">
            <SocialLinks />
          </div>
          <div className="flex sm:translate-x-2/4 gap-6">
            <Link href={"/"}>Home</Link>
            <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${randome()}`}>
              Trending-Post
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_URL}/about`}>About</Link>
          </div>
        </div>
      </nav>
      <div className="flex w-11/12 mx-auto gap-8 mt-5 mb-4">
        <div className="basis-2/3 md:mt-3">
          <h4 className="font-bold text-3xl md:text-6xl">Blog AI Zone</h4>
          <p className="mt-3">
            Blog mejorado con IA: Exploración de un mosaico de temas
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
