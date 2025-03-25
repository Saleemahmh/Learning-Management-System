import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Courses",
      link: "/allcourses",
    },
  ];
  const [mobileNav, setMobileNav] = useState("hidden");
  return (
    <>
      <nav className="z-50 relative flex bg-cyan-950 text-cyan-200 px-8 py-4 items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-10 me-4"
            src="/calligraphy-pen_3730113.png"
            alt="logo"
          ></img>
          <h1 className="text-2xl font-semibold">LearnSphere</h1>
        </div>
        <div className="nav-links-learnsphere block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {links.map((items, i) => (
              <Link
                to={items.link}
                className="hover:text-cyan-500 transition-all duration-300"
                key={i}
              >
                {items.title}{" "}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <Link
              to="/login"
              className="hover:bg-cyan-500 hover:text-cyan-800 px-2 py-1 border border-cyan-500 rounded"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="hover:bg-cyan-800 hover:text-cyan-200 px-2 py-1 bg-cyan-500 text-cyan-950 rounded"
            >
              Register
            </Link>
          </div>
          <button
            className="text-cyan-200 text-2xl hover:text-cyan-400"
            onClick={() =>
              mobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            <FaGripLines />
          </button>
        </div>
      </nav>

      <div className={`${mobileNav} bg-cyan-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
        {links.map((items, i) => (
          <Link
            to={items.link}
            className={`{${mobileNav} text-4xl mb-4 font-semibold hover:text-cyan-500 transition-all duration-300`}
            key={i}
            onClick={() =>
              mobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            {items.title}{" "}
          </Link>
        ))}
        <Link
          to="/login"
          className={`${mobileNav} px-8 mb-8 text-4xl font-semibold hover:bg-cyan-500 hover:text-cyan-800 py-2 border border-cyan-500 transition-all duration-300 rounded`}
        >
          Login
        </Link>
        <Link
          to="/register"
          className={`${mobileNav} px-8 mb-8 text-4xl font-semibold hover:bg-cyan-800 hover:text-cyan-200 py-2 bg-cyan-500 text-cyan-950 transition-all duration-300 rounded`}
        >
          Register
        </Link>
      </div>
    </>
  );
};

export default Navbar;
