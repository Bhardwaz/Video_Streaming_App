import ReactDOM  from "react-dom/client";
import React from "react";
import Header from "./src/components/Layout/Header";
import { Provider } from "react-redux";
import store from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return(
        <Provider store={store}>
           <Header />
        </Provider>
    )
}

root.render(<AppLayout />)