import Link from "next/link";
import React from "react";
import { Post } from "@prisma/client";
import Image from "next/image";

type Props = {
  className: string;
  post: Post;
};

const TrendigCart = ({ className, post }: Props) => {
  return (
    <Link
      className={`${className} relative block mt-8 sm:mt-0 w-full h-96 sm:h-auto hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      <div className="z-0 relative w-full h-full">
        <Image
          // * fill make the image component fill to all the container
          fill
          placeholder="blur"
          alt="tech"
          // * Different image size depending on screen size
          sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
          src={post?.image}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="z-10 absolute top-0 left-0 h-full w-full bg-gradient-gradual"></div>
      <div className="z-20 absolute bottom-0 left-0 p-4">
        <div className="py-1 px-8 inline-block bg-accent-orange">
          <span className="font-semibold">{post?.category}</span>
        </div>
        <p className="text-wh-10 mt-3">{post?.title}</p>
      </div>
    </Link>
  );
};

export default TrendigCart;
