import ReactDOM from "react-dom/client";
import React, { useState, useContext } from "react";
import Header from "./src/components/Layout/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import VideoContainer from "./src/components/Body/VideoContainer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Theatre from "./src/components/Body/Theatre";
import SearchResults from "./src/components/Body/SearchResults";
import SignInPage from "./src/components/Body/SignIn";
import LiveChatPage from "./src/components/Body/LiveChat";
const root = ReactDOM.createRoot(document.getElementById("root"));

export const ThemeContext = React.createContext();
const AppLayout = () => {
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#eeeeee",
      background: "#000000",
    },
  };
  const [theme, setTheme] = useState(themes.dark);
  const [activeTheme, setActiveTheme] = useState("dark");
  const toggleTheme = () => {
    const nextTheme = activeTheme === "dark" ? "light" : "dark";
    setTheme(themes[nextTheme]);
    setActiveTheme(nextTheme);
  };
  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        height: "100vh",
      }}
    >
      <ThemeContext.Provider value={[theme, toggleTheme]}>
        <Provider store={store}>
          <Header />
          <Outlet />
        </Provider>
      </ThemeContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "/theatre",
        element: <Theatre />,
      },
      {
        path: "/results",
        element: <SearchResults />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/livechat",
        element: <LiveChatPage />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
