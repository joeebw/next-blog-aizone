import Trending from "./(home)/Trending";
import Tech from "./(home)/Tech";
import Travel from "app/(home)/Travel";
import OtherPosts from "app/(home)/OtherPosts";
import Subscribe from "./(home)/Subscribe";
import SideBar from "./(shared)/SideBar";
import { prisma } from "./api/client";
import { Post } from "@prisma/client";

// ! In here I get from the database all the posts
const getPost = async () => {
  // * FindMany find all the post in this case
  const posts = await prisma.post.findMany();

  // * Here make string path of the images to static import image
  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
      };
    })
  );

  return formattedPosts;
};

// ! This is a server component in nextJs 13 by default everything is a server component
export default async function Home() {
  const posts = await getPost();

  const formatPosts = (): Post[][] => {
    const trendingPosts: Post[] = [];
    const techPosts: Post[] = [];
    const travelPosts: Post[] = [];
    const otherPosts: Post[] = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      switch (post?.category) {
        case "Tech":
          techPosts.push(post);
          break;
        case "Travel":
          travelPosts.push(post);
          break;
        case "Interior Design":
          otherPosts.push(post);
          break;
        default:
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  return (
    <main className="w-11/12 mx-auto leading-7">
      <Trending trendingPosts={trendingPosts} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <OtherPosts otherPosts={otherPosts} />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <SideBar />
        </div>
      </div>
    </main>
  );
}
