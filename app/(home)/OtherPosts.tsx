import React from "react";
import Card from "../(shared)/Card";
import { Post } from "@prisma/client";

type props = {
  otherPosts: Post[];
};

const OtherPosts = ({ otherPosts }: props) => {
  return (
    <section className="mt-24">
      <hr className="border-1 mb-9" />
      <div>
        <p className="font-bold text-2xl">Other Trending Posts</p>
      </div>

      <div className="sm:grid grid-cols-2 gap-6 my-9">
        <Card
          className="mb-9 sm:mb-0"
          imageHeight="h-80"
          post={otherPosts[0]}
        />
        <Card
          className="mb-9 sm:mb-0"
          imageHeight="h-80"
          post={otherPosts[1]}
        />
        <Card
          className="mb-9 sm:mb-0"
          imageHeight="h-80"
          post={otherPosts[2]}
        />
        <Card
          className="mb-9 sm:mb-0"
          imageHeight="h-80"
          post={otherPosts[3]}
        />
      </div>
    </section>
  );
};

export default OtherPosts;
