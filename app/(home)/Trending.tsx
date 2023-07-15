import React from "react";
import TrendigCart from "./TrendigCart";

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className="my-9">
      <div className="flex gap-6 items-center">
        <div className="py-1 px-8 bg-wh-900">
          <span className="font-bold text-wh-10">TRENDING</span>
        </div>
        <p>
          Nunc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
          nulla dolor diam turpis.
        </p>
      </div>

      {/* //  ? Trending pages */}
      <div className="sm:grid grid-cols-4 gap-4 grid-rows-2 my-3 sm:h-[600px]">
        <TrendigCart className="col-span-2 row-span-2"></TrendigCart>
        <TrendigCart className="col-span-2 row-span-1"></TrendigCart>
        <TrendigCart className="col-span-1 row-span-1"></TrendigCart>
        <TrendigCart className="col-span-1 row-span-1"></TrendigCart>
      </div>
      <p className="text-sm">
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
      </p>
    </section>
  );
};

export default Trending;
