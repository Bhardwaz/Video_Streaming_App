import ReactDOM  from "react-dom/client";
import React from "react";
import Header from "./src/components/Layout/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import Sidebar from "./src/components/Body/Sidebar";

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return(
        <Provider store={store}>
           <Header />
           <Sidebar />
        </Provider>
    )
}

root.render(<AppLayout />)