import React from "react";

const Head = () => {
  return (
    <>
      <div className="grid grid-flow-col p-5 m2 shadow-lg">
        <div className="flex col-span-1 ">
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            alt=""
          />
          <img
            className="h-8 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
            alt="youtube-logo"
          />
        </div>

        <div className="h-8 col-span-10">
          <input
            type="text"
            placeholder="search"
            className="border border-gray-400 w-1/2 p-2 rounded-l-full"
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            Search
          </button>
        </div>
        <div className="col-span-1">
          <img
            className="h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
            alt="user"
          />
        </div>
      </div>
    </>
  );
};

export default Head;
