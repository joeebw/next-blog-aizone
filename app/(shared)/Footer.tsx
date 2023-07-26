import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-wh-900 py-10">
      <div className="sm:flex gap-16 w-11/12 mx-auto text-white">
        <div className="mt-16 sm:mt-0 basis-1/2">
          <h4 className="font-bold">BLOG AI ZONE</h4>
          <p className="my-5">
            Welcome to AI Zone, the blog that covers various topics related to
            artificial intelligence. Here you will find news, trends,
            applications, ethics, and more about this fascinating and
            fast-growing field. Whether you are an AI enthusiast, a
            professional, a student, or just curious, you will find something
            interesting and useful here.
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
