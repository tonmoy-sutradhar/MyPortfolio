import React from "react";
import { Typewriter } from "react-simple-typewriter";
import tonmoy from "../../../assets/tonmoy-bg.png";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";

const Banner = () => {
  return (
    <>
      <div className="md:flex justify-center items-center bg-gradient-to-r from-slate-900 to-slate-900 ">
        {/* My Information */}
        <div className=" ml-24">
          <h1 className="text-7xl font-bold text-white">Hello</h1>
          <h1 className="text-7xl font-bold text-white mb-4">
            I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-lime-400 ">
              Tonmoy Sutradhar
            </span>
          </h1>

          <p className="text-white w-[800px] my-3">
            I attend American International University and have a strong
            interest in web development. I'm an expert at creating dynamic,
            responsive websites, and I'm always looking for new ways to use code
            to realize creative concepts."
          </p>

          <h1
            className="text-2xl border-4 border-blue-400 rounded-xl p-2 w-96 font-bold text-white"
            style={{ margin: "auto 0", fontWeight: "normal" }}
          >
            {" "}
            <span style={{ color: "lime", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Web App Developer",
                  "Frontend Developer",
                  "Backend Developer!",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <div className="flex items-center text-white gap-4 mt-3">
            <a href="https://github.com/tonmoy-sutradhar" target="blank">
              <BsGithub className="w-8 h-8"></BsGithub>
            </a>

            <a
              href="https://www.linkedin.com/in/tonmoy-sutradhar/"
              target="blank"
            >
              <FaLinkedin className="w-8 h-8 text-blue-500"></FaLinkedin>
            </a>

            <a
              href="https://stackoverflow.com/users/21450296/tonmoy-sutradhar"
              target="blank"
            >
              <BsStackOverflow className="w-8 h-8 text-yellow-600"></BsStackOverflow>
            </a>
          </div>

          <button className="text-xl box-border border-4 border-sky-900 w-44 mt-3 h-10 rounded-lg bg-sky-600 text-white relative group">
            <span className="pr-8">Get Resume</span>
            <span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-8 inline mx-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
        </div>

        {/* My Image */}
        <div className="flex-1" target="blank">
          <img src={tonmoy} alt="" />
        </div>
      </div>

      {/* About me write something */}
      <div className="bg-slate-900 text-white pt-12">
        <h1 className="text-center text-5xl font-bold">About Me</h1>
        <p className="w-[1300px] mx-auto pt-5">
          "I am a dedicated web developer and a proud student of American
          International University. I specialize in crafting responsive,
          user-friendly websites with clean and efficient code. Passionate about
          learning, I constantly explore new technologies to enhance my skills.
          My focus is on delivering innovative digital solutions that make an
          impact. I'm driven by the goal of combining creativity and
          functionality to solve real-world challenges."
        </p>
      </div>
    </>
  );
};

export default Banner;

// ------------------
{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path
    fill="#0099ff"
    fill-opacity="1"
    d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,154.7C672,160,768,192,864,218.7C960,245,1056,267,1152,245.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ></path>
</svg>; */
}
