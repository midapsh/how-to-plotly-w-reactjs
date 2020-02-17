// BrowserRouter: roteamento do router (/asdsad/asdasdasd/sad)
// HashRouter: rotemanteo do router (/#)
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./pages/Main";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
        </BrowserRouter>
    );
}
