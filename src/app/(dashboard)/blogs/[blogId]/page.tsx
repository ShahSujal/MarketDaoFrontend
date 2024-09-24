import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    blogId: string;
  };
};
const BlogPage = async ({ params }: Props) => {
  const client = createClient();
  const blog = await client.getByUID("blogs", params.blogId);
  if (!blog.data) {
    return <div></div>;
  }
  return (
    <div className=" w-full min-h-screen">
      <Image
        src={blog.data.banner.url!}
        alt="Banner Image"
        width={1000}
        height={1000}
        className=" w-full h-[400px] object-cover"
      />
      <div className=" px-8 py-3">
        <h1 className=" text-3xl font-paps font-bold text-gray-200 my-5">
          {blog.data.title}
        </h1>
        <PrismicRichText field={blog.data.description} />
      </div>
    </div>
  );
};

export default BlogPage;
