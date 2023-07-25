import React from "react";
import Card from "../(shared)/Card";
import { Post } from "@prisma/client";

type Props = {
  techPosts: Post[];
};

const Tech = ({ techPosts }: Props) => {
  return (
    <section className="my-10">
      <hr className="border-1 mb-9" />
      <div className="flex gap-6 items-center">
        <div className="py-1 px-8 bg-accent-orange">
          <span className="font-bold">HOT</span>
        </div>
        <p className="font-bold text-2xl">Latest News in Technology</p>
      </div>

      <div className="sm:grid grid-cols-2 grid-rows-3 gap-8 my-9">
        {/* LARGE CARD */}
        <Card
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          post={techPosts[0]}
          isLongForm
        />
        {/* SMALL CARDS */}
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[1]}
          isSmallCard
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[2]}
          isSmallCard
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          post={techPosts[3]}
          isSmallCard
        />
      </div>
    </section>
  );
};

export default Tech;
