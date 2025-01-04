import react from "../../assets/react.png";
import NodeJS from "../../assets/nodejs.png";
import MongoDB from "../../assets/mongodb.jpg";
import NextJs from "../../assets/NextJs.jpg";
import NestJs from "../../assets/NestJs.png";
import CPlus from "../../assets/cPlus.png";
import Csharp from "../../assets/CSharp.png";
import typescript from "../../assets/typeScript.jpg";

const Skills = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center bg-slate-900 text-white pt-11 pb-10">
        Skills
      </h1>
      <div className="grid md:grid-cols-4 gap-5 bg-slate-900 px-40 ">
        <div className="bg-slate-800 p-5 rounded-xl w-[80%] h-[100%] border-4 border-blue-600">
          <img className="w-[60%] mx-auto rounded-xl" src={react} alt="" />
          <h1 className="text-xl font-bold text-center text-white pt-2">
            React JS
          </h1>
          <p className="pt-2 text-center text-gray-400">
            React.js for Frontend and User-Interface Development.
          </p>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl  w-[80%] h-[100%]  border-4 border-blue-600">
          <img className="w-[60%] mx-auto rounded-xl" src={NodeJS} alt="" />
          <h1 className="text-xl font-bold text-center text-white pt-2">
            Node.JS & Express.js
          </h1>
          <p className="pt-2 text-center text-gray-400">
            Node.JS & Express.js for Backend API's Development.
          </p>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl  w-[80%] h-[100%]  border-4 border-blue-600">
          <img className="w-[60%] mx-auto rounded-xl" src={MongoDB} alt="" />
          <h1 className="text-xl font-bold text-center text-white pt-2">
            MongoDB Database
          </h1>
          <p className="pt-2 text-center text-gray-400">
            MongoDB for Backend API's Database Management.
          </p>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl  w-[80%] h-[100%]  border-4 border-blue-600">
          <img className="w-[60%] mx-auto rounded-xl" src={NextJs} alt="" />
          <h1 className="text-xl font-bold text-center text-white pt-2">
            Next.js
          </h1>
          <p className="pt-2 text-center text-gray-400">
            Next.js for Frontend and Backend Both Development.
          </p>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl  w-[80%] h-[100%]  border-4 border-blue-600">
          <img className="w-[60%] mx-auto rounded-xl" src={NestJs} alt="" />
          <h1 className="text-xl font-bold text-center text-white pt-2">
            Nest JS
          </h1>
          <p className="pt-2 text-center text-gray-400">
            Nest.js for Backend API's Development.
          </p>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl  w-[80%] h-[100%] border-4 border-blue-600">
          <img className="w-[60%] mx-auto rounded-xl" src={typescript} alt="" />
          <h1 className="text-xl font-bold text-center text-white pt-2">
            TypeScript
          </h1>
          <p className="pt-2 text-center text-gray-400">
            TypeScript for Frontend and User-Interface Development.
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;
