import React from "react";

import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div className="font-sen my-16 px-3" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://junaidumer.netlify.app/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">Junaid Umer</p>
              <p>
                An open-source portfolio built in ReactJS and proudly hosted on
                Netlify.
              </p>
            </div>
          </a>
        </Link>

        <Link href="https://www.beyonddispatch.com/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">Beyond Dispatch</p>
              <p>#1 truck dispatcher for owner-operators!</p>
            </div>
          </a>
        </Link>

        <Link href="https://blessedcouples.pk/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">Blessed Couples</p>
              <p>
                A match-making service with a whole new concept of going about
                marriage the unconventional way!
              </p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/avneesh0612/Orbits-UI" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">Orbits UI</p>
              <p>React component library built with Tailwind CSS</p>
            </div>
          </a>
        </Link>

        <Link href="https://vault3.live" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">Vault3</p>
              <p>Your safest decentralized vault</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/avneesh0612/Orbits-UI" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary flex h-full w-full flex-col items-center justify-center rounded-lg px-2 text-center font-medium">
              <p className="text-xl font-semibold">Orbits UI</p>
              <p>React component library built with Tailwind CSS</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
