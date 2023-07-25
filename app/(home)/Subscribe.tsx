import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center py-12 px-3 bg-wh-10">
      <h4 className="font-semibold text-base">Subscribe to our Newsletter</h4>
      <p className="text-wh-500 mt-4 w-5/6 text-center">
        Enter email address to get top news and great deals
      </p>
      <input
        type="text"
        className="w-5/6 py-2 mt-3 text-center placeholder:text-center border-2"
        placeholder="Enter email address"
      />
      <button className="bg-accent-red w-5/6 py-3 text-wh-10 font-semibold mt-3">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Subscribe;
