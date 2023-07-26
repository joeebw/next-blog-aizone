import React from "react";
import TrendigCart from "./TrendigCart";
import { Post } from "@prisma/client";

type Props = {
  trendingPosts: Post[];
};

const Trending = ({ trendingPosts }: Props) => {
  return (
    <section className="my-9">
      <div className="flex gap-6 items-center">
        <div className="py-1 px-8 bg-wh-900">
          <span className="font-bold text-wh-10">TRENDING</span>
        </div>
        <p>
          Discover the latest trends. Enter and browse the posts that match your
          interests and preferences.
        </p>
      </div>

      {/* //  ? Trending pages */}
      <div className="sm:grid grid-cols-4 gap-4 grid-rows-2 my-3 sm:h-[600px]">
        <TrendigCart
          className="col-span-2 row-span-2"
          post={trendingPosts[0]}
        />
        <TrendigCart
          className="col-span-2 row-span-1"
          post={trendingPosts[1]}
        />
        <TrendigCart
          className="col-span-1 row-span-1"
          post={trendingPosts[2]}
        />
        <TrendigCart
          className="col-span-1 row-span-1"
          post={trendingPosts[3]}
        />
      </div>
      <p className="text-sm mt-4">
        Here you will find news, trends, applications, ethics, and more about
        this fascinating and fast-growing field.
      </p>
    </section>
  );
};

export default Trending;
