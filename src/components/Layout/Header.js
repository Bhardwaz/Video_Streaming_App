import React, { useEffect, useState, useContext } from "react";
import HamMenu from "../../../assests/HeaderIcons/menu.svg";
import Close from "../../../assests/HeaderIcons/close.svg";
import Logo from "../../../assests/HeaderIcons/wired-lineal.gif";
import Search from "../../../assests/HeaderIcons/searchIcon.gif";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../../utils/menuSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../../../utils/constants";
import { Link } from "react-router-dom";
import { onSearch, toggleList } from "../../../utils/showListSlice";
import { ThemeContext } from "../../../App";

const HamburgerMenu = () => {
  const theme = useContext(ThemeContext);
  const { background, foreground } = theme;
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  return (
    <div
      onClick={() => dispatch(toggleList())}
      className="ml-4 flex items-center justify-around header:justify-center header:px-16"
    >
      <div style={{ backgroundColor: background, color: foreground }}>
        {isMenuOpen ? (
          <img
            className="cursor-pointer"
            onClick={() => {
              dispatch(toggleMenu());
            }}
            alt="close"
            src={Close}
          />
        ) : (
          <img
            className="cursor-pointer"
            onClick={() => {
              dispatch(toggleMenu());
            }}
            alt="open"
            src={HamMenu}
          />
        )}
      </div>
      <div className="flex h-20 w-20">
        <img className="cursor-pointer" src={Logo} alt="logo" />
      </div>
    </div>
  );
};

const SearchBar = () => {
  const [userQuery, setUserQuery] = useState("");
  const [showQueries, setShowQueries] = useState([]);

  const showList = useSelector((store) => store.list.isListOpen);
  const dispatch = useDispatch();
  //  const cache = useSelector(store => store.search.results)

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [userQuery]);

  const getSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + userQuery, {
      headers: {
        "x-cors-api-key": "temp_230029e74adb21e4189bc3774ef15a82",
      },
    });
    const json = await response?.json();
    setShowQueries(json[1]);
    // dispatch(addQueries({
    //     [userQuery] : json[1]
    // }))
    console.log("API CALL");
  };
  const handleListClick = (query) => {
    setUserQuery(query);
    // dispatch(addQuery(query))
  };

  return (
    <div className="flex items-center justify-start px-2 pr-10 header:w-2/3 header:justify-end header:px-2 header:pr-0">
      <div className="flex w-full justify-end">
        <div className="relative flex w-[80%] flex-col items-end justify-end header:w-[50%]">
          <input
            onFocus={() => {
              dispatch(onSearch());
            }}
            className="w-full rounded-l-full bg-gray-200 px-3 py-1.5 text-lg font-bold outline-none"
            type="text"
            value={userQuery}
            placeholder="search"
            onChange={(e) => {
              setUserQuery(e.target.value);
            }}
          />

          <ul className="absolute top-10 z-10 w-full rounded-lg border-gray-300 bg-gray-200 shadow-2xl ">
            {showList
              ? showQueries.map((query) => (
                  <Link to={"/results"} key={query}>
                    <li
                      onClick={() => handleListClick(query)}
                      className="flex cursor-pointer items-center gap-5 rounded-lg border-t-2 border-gray-300 px-3 py-1.5 font-bold hover:bg-slate-300"
                    >
                      <img alt="searchIcon" src={Search} className="h-8 w-8" />
                      {query}
                    </li>
                  </Link>
                ))
              : " "}
          </ul>
        </div>

        <div className="w-[20%]">
          <Link to={"/results"}>
            {" "}
            <img
              alt="search"
              src={Search}
              className="h-10 w-10 cursor-pointer rounded-sm border border-l-black bg-gray-300 p-1"
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <nav className="mx-auto flex h-20 w-full max-w-7xl justify-between">
      <HamburgerMenu />
      <SearchBar />
    </nav>
  );
};
export default Header;
