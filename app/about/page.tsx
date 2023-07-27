import React from "react";
import SideBar from "../(shared)/SideBar";
import Image from "next/image";
import SocialLinks from "../(shared)/SocialLinks";
import AboutContent from "./AboutContent";

type Props = {};

const About = (props: Props) => {
  return (
    <main className="w-11/12 mx-auto leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4 mt-8 mb-9">
          <AboutContent />
        </div>
        <div className="basis-1/4">
          <SideBar />
        </div>
      </div>
    </main>
  );
};

export default About;
