import React from "react";

const BlogDetails = ({ blogDetils }) => {
  const { title, description } = blogDetils;
  return (
    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded lg:mb-11 md:mb-11 sm:mb-9 mb:9">
      <img
        src="https://live.staticflickr.com/65535/52413593240_e00326e727_o.png"
        alt=""
        className="w-full h-60 sm:h-[500px] bg-gray-500"
      />
      <div className="p-6 pb-12 m-4 mx-auto sm:-mt-16 mt-0 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
        <div className="space-y-2">
          <h1 className="inline-block text-2xl font-semibold sm:text-3xl">
            {title}
          </h1>
        </div>
        <div className="text-gray-100">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
