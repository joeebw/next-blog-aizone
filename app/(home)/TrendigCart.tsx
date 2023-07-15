import Link from "next/link";
import React from "react";

type Props = {
  className: string;
};

const TrendigCart = ({ className }: Props) => {
  return (
    <Link
      className={`${className} relative block mt-8 sm:mt-0 w-full h-96 sm:h-auto hover:opacity-70`}
      href={"/"}
    >
      <div className="z-0 w-full h-full bg-slate-500">Image</div>
      <div className="z-10 absolute top-0 left-0 h-full w-full bg-gradient-gradual"></div>
      <div className="z-20 absolute bottom-0 left-0 p-4">
        <div className="py-1 px-8 bg-accent-orange">
          <span className="font-semibold">category</span>
        </div>
        <p className="text-wh-10 mt-3">Post title</p>
      </div>
    </Link>
  );
};

export default TrendigCart;
