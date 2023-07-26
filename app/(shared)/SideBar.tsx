import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "../(home)/Subscribe";
import Image from "next/image";
import Ad2 from "public/assets/ad-2.jpg";
import AboutProfile from "public/assets/about-profile.jpg";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div>
      <div className="py-2 bg-wh-900 text-center text-white">
        <span className="font-bold">Subscribe en follow</span>
      </div>

      <div className="w-5/6 mx-auto mt-5">
        <SocialLinks isDark />
      </div>
      <div className="mt-5">
        <Subscribe />
        <Image
          className="hidden md:block my-8 w-full"
          alt="advert-2"
          placeholder="blur"
          src={Ad2}
          width={500}
          height={1000}
        />
      </div>
      <div className="flex justify-center bg-wh-900 py-4">
        <span className="text-white text-sm font-bold">About the blog</span>
      </div>
      <div className="flex justify-center my-6">
        <Image
          alt="about-profile"
          placeholder="blur"
          src={AboutProfile}
          style={{ width: "500px", height: "250px", objectFit: "cover" }}
        />
      </div>
      <h4 className="text-center my-3 text-wh-500 font-bold">Lila Rose</h4>
      <p className="text-wh-500 text-center text-sm">
        AI and technology are not just tools, they are extensions of our minds
        and hearts.
      </p>
    </div>
  );
};

export default SideBar;
