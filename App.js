import ReactDOM  from "react-dom/client";
import React from "react";
import Header from "./src/components/Layout/Header";

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return(
        <>
           <Header />
        </>
    )
}

root.render(<AppLayout />)