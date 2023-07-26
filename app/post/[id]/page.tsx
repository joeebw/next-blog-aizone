import React from "react";
import SideBar from "@/app/(shared)/SideBar";
import { prisma } from "@/app/api/client";
import { Post as PostType } from "@prisma/client";
import { FormattedPostType } from "@/app/types";
import Content from "./Content";

type Props = {
  params: { id: string };
};

const getPost = async (id: string) => {
  //  * Find the post with the id
  const post: PostType | null = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    console.log(`post with id ${id} not found`);
    return null;
  }

  const imageModule = require(`../../../public${post.image}`);

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updateAt: post?.updateAt?.toISOString(),
    image: imageModule.default,
  };

  return formattedPost;
};

// ! This is a server component
const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: FormattedPostType | null = await getPost(id);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <main className="w-11/12 mx-auto leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <SideBar />
        </div>
      </div>
    </main>
  );
};

export default Post;
