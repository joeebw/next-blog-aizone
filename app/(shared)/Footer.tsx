import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-wh-900 py-10">
      <div className="sm:flex gap-16 w-11/12 mx-auto text-white">
        <div className="mt-16 sm:mt-0 basis-1/2">
          <h4 className="font-bold">BLOG AI ZONE</h4>
          <p className="my-5">
            Welcome to AI Zone, Welcome to our blog, where cutting-edge
            technology meets captivating travel tales and the latest trends in
            various domains! We take pride in presenting a unique blend of
            AI-generated content created using the OpenAI API. Our goal is to
            provide you with informative and engaging posts that cover a wide
            range of topics, from tech breakthroughs to exciting travel
            destinations and everything in between.
          </p>
          <p>© Blog AI ZONE All Rights Reserved.</p>
        </div>
        <div className="mt-16 sm:mt-0 basis-1/4">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Some random link again</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 sm:mt-0 basis-1/4">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
