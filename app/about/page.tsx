import React from "react";
import SideBar from "../(shared)/SideBar";
import Image from "next/image";
import SocialLinks from "../(shared)/SocialLinks";

type Props = {};

const About = (props: Props) => {
  return (
    <main className="w-11/12 mx-auto leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4 prose w-full max-w-full mt-8">
          <h5 className="text-wh-300 mb-3">{`Home > About`}</h5>
          <h3 className="mb-[0.6em] mt-0 font-bold text-3xl">About AI blog</h3>
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By Diego Garci</h5>
            <h6 className="text-wh-300 text-xs">July 10, 2023</h6>
          </div>
          <div className="relative w-auto mt-2 mb-16 h-[470px]">
            <Image
              fill
              alt={""}
              src={"/assets/about-section.jpg"}
              sizes="(max-width: 480px) 100vw,
                (max-width:768px) 85vw,
                (max-width: 1060px) 75vw,
                60vw
          "
              style={{ objectFit: "cover" }}
            />
          </div>

          <h2>Unleashing the Potential of AI: The OpenAI API in Action</h2>
          <p>
            As an AI enthusiast and a firm believer in the potential of
            artificial intelligence, I am thrilled to present this blog as a
            testament to the power of GPT-3 Turbo. By harnessing the
            capabilities of the OpenAI API, this blog takes on a life of its
            own, curating an enriching experience for both creators and readers
            alike.
          </p>

          <h2>
            Diving into the World of Technology: Trends, Ethics, and Insights
          </h2>
          <p>
            Delve into the realm of technology where we explore the cutting-edge
            advancements, delve into thought-provoking discussions on the
            ethical implications, and offer insightful guides to leverage AI for
            various applications.
          </p>

          <h2>
            Wanderlust Unleashed: Embark on Breathtaking Travel Adventures
          </h2>
          <p>
            Our travel section will take you on breathtaking journeys to exotic
            destinations, sharing travel tips, cultural insights, and
            heartwarming anecdotes that will ignite your wanderlust.
          </p>

          <h2>Empower Your Creativity: Editing Freedom at Your Fingertips</h2>
          <p>
            Furthermore, we take pride in being a platform that values your
            creativity and uniqueness. With the freedom to edit both the title
            and content of each post, you can infuse your personal touch and
            make each piece truly your own.
          </p>

          <h2>
            AI Continues to Evolve: Smart Content Generation within the Platform
          </h2>
          <p>
            But that's not all; the AI integration goes beyond the initial
            creation. By incorporating intelligent AI within the platform, we
            continue to refine and enhance our content, ensuring that every
            article remains up-to-date, relevant, and engaging.
          </p>

          <h2>Embark on a Journey of Exploration and Knowledge</h2>
          <p>
            Together, let's embark on a journey of exploration and knowledge,
            where we celebrate the wonders of technology and seek to understand
            its impact on our lives and the world at large.
          </p>

          <h2>Spotlight on Trending Tech and Hot Topics</h2>
          <p>
            From trend-spotting in the ever-evolving tech landscape to
            discussing the hottest topics shaping our society, this blog offers
            a space for constructive conversations and insightful perspectives.
          </p>

          <h2>The Thrilling Intersection: AI and Human Creativity</h2>
          <p>
            So, fasten your seatbelts as we navigate the thrilling intersection
            of artificial intelligence and human creativity. Join me in this
            exhilarating adventure, as we uncover the possibilities and
            potential of AI while celebrating the essence of human ingenuity.
          </p>

          <h2>
            Forge Ahead Hand in Hand: Embracing the Captivating World of AI
          </h2>
          <p>
            Let's forge ahead, hand in hand, into the captivating world that
            awaits us! Together, we'll explore the frontiers of AI, pushing
            boundaries, and envisioning a future where technology and human
            potential intertwine seamlessly.
          </p>
          <div className="hidden md:block mt-10 w-1/3">
            <SocialLinks isDark />
          </div>
        </div>
        <div className="basis-1/4">
          <SideBar />
        </div>
      </div>
    </main>
  );
};

export default About;
