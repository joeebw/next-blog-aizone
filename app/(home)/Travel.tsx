import React from "react";
import Card from "app/(shared)/Card";
import { Post } from "@prisma/client";

type Props = {
  travelPosts: Post[];
};

const Travel = ({ travelPosts }: Props) => {
  return (
    <section className="mt-24">
      <hr className="border-1 mb-9" />
      <div className="flex gap-6 items-center">
        <div className="py-1 px-8 bg-accent-green">
          <span className="font-bold">TRAVEL</span>
        </div>
        <p className="font-bold text-2xl">New Travel Experience</p>
      </div>

      <div className="sm:flex justify-between gap-6 my-9">
        <Card className="basis-1/3" imageHeight="h-96" post={travelPosts[0]} />
        <Card
          className="basis-1/3 my-10 sm:my-0"
          imageHeight="h-96"
          post={travelPosts[1]}
        />
        <Card className="basis-1/3" imageHeight="h-96" post={travelPosts[2]} />
      </div>

      <Card
        className="sm:flex justify-between items-center gap-6"
        imageHeight="h-96"
        post={travelPosts[3]}
      />
    </section>
  );
};

export default Travel;
