import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About = () => {
  return (
    <div className="font-sen my-8 flex flex-row items-center justify-between px-3">
      <div>
        <p className="text-3xl font-bold text-white">Hi, I am Danish</p>
        <p className="mt-1 text-lg text-gray-300">
          A Software Engineer, Blogger and a Night Owl!
        </p>

        <p className="mt-4 text-gray-400">
          Building Websites, Web applications, proficient in full stack
          development. Writing articles on <br /> dev.to sometimes.
        </p>

        <Link href="https://dev.to/mrdanishsaleem/" passHref>
          <a
            className="font-jost mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my articles
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

        <Link href="https://www.buymeacoffee.com/mrdanishsaleem" passHref>
          <a
            className="font-jost mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Love my work? Sponsor me!
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

        <Link
          href="https://mrdanishsaleem.notion.site/Resume-46d106ce5e9e46ae8ff9926cf4321c5b"
          passHref
        >
          <a
            className="font-jost mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check my Resume!
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div className="custom:block hidden">
        <Image
          src="/assests/avatar.png"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
