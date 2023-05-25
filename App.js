import ReactDOM  from "react-dom/client";
import React from "react";
import Header from "./src/components/Layout/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import VideoContainer from "./src/components/Body/VideoContainer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Theatre from "./src/components/Body/Theatre";

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return(
        <Provider store={store}>
           <Header/>
           <Outlet /> 
        </Provider>
    )
}

const appRouter = createBrowserRouter([{
    path:'/',
    element:<AppLayout />,
    children:[
        {
            path:'/',
            element:<VideoContainer />
        },
        {
            path:'/theatre',
            element:<Theatre />
        },
    ]
}])

root.render(<RouterProvider router={appRouter} />)