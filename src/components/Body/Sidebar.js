import { useSelector } from "react-redux";
import Home from "../../../assests/Body/sidebarHome.gif";
import Live from "../../../assests/Body/liveVideo.gif";
import Dev from "../../../assests/Body/developer.gif";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../../../App";
const Sidebar = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const { background, foreground } = theme;
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  if (!isMenuOpen) return;
  return (
    <div
      style={{ color: foreground, backgroundColor: background }}
      className="absolute left-0 top-0 z-10 h-[89vh] w-32 rounded-md font-bold"
    >
      <ul className="flex h-full flex-col justify-between">
        <div>
          <li
            style={{ borderColor: foreground }}
            className="flex cursor-pointer items-center gap-2 rounded-lg border-b-2 p-1 text-lg hover:bg-[#ff0000]"
          >
            <img className="w-10" alt="home" src={Home} />{" "}
            <Link to={"/"}> Home </Link>{" "}
          </li>

          <Link to={"/livechat"}>
            <li
              style={{ borderColor: foreground }}
              className="flex cursor-pointer items-center gap-2 rounded-lg border-b-2 border-black p-1 text-lg hover:bg-[#ff0000]"
              onClick={() => {}}
            >
              <img className="w-10" alt="Live Video" src={Live} /> Live{" "}
            </li>
          </Link>

          <li
            style={{ borderColor: foreground }}
            className="flex cursor-pointer items-center gap-2 rounded-lg border-b-2 p-1 text-lg hover:bg-[#ff0000]"
            onClick={() => {
              toggleTheme();
            }}
          >
            <img
              className="w-10"
              alt="Live Video"
              src={
                "https://png.pngtree.com/png-vector/20221010/ourmid/pngtree-theme-icon-vector-png-image_6293125.png"
              }
            />
            {theme.background === "#000000" ? "Light" : "Dark"}
          </li>
        </div>
        <li
          style={{ color: foreground }}
          className="flex flex-col items-center text-center font-light"
        >
          {" "}
          <img src={Dev} alt="devs" className="w-10" /> Created With ❤️ By Sumit
          Bhardwaj{" "}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
