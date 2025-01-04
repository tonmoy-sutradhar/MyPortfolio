import logo from "../assets/logo2.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer bg-slate-900   text-white px-10 py-4">
      <aside className="grid-flow-col items-center">
        <button>
          <img className="w-9 h-9 rounded-full" src={logo} alt="" />
        </button>
        <p>
          💖2025{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-lime-400 ">
            TONMOY SUTRADHAR.
          </span>{" "}
          All rights reserved.{" "}
        </p>
      </aside>
      <nav className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-400"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="">
            <IoLogoWhatsapp className="text-green-400 w-7 h-7"></IoLogoWhatsapp>
          </a>
          <a href="https://github.com/xyflow/xyflow#readme" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-400"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <a>
            <BsInstagram className="bg-gradient-to-r from-orange-500 to-yellow-600 rounded-md w-7 h-7"></BsInstagram>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
