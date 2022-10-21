import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="font-sen my-16 px-3 text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills & Uses</p>

      <div className="text-md custom:text-lg my-8 flex flex-col font-medium md:text-xl">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">ReactJS</span>
          &nbsp;as my Frontend Framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">JavaScript</span>
          &nbsp;as my main language
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Tailwind CSS </span>
          &nbsp;as my CSS framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Adobe XD </span>
          &nbsp;as my designing tool
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Express JS </span>
          &nbsp;as my API framework
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Git & GitHub </span>
          &nbsp;as my VCSs
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Visual Studio Code </span>
          &nbsp;as my code editor
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">HTML5</span>,{" "}
        <span className="text-white">CSS3</span>,{" "}
        <span className="text-white">WordPress</span>,{" "}
        <span className="text-white">Selenium</span>,{" "}
        <span className="text-white">SQL</span>,{" "}
        <span className="text-white">Windows</span>{" "}
      </p>
    </div>
  );
};

export default Skills;
