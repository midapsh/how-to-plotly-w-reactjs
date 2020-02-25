// BrowserRouter: roteamento do router (/asdsad/asdasdasd/sad)
// HashRouter: rotemanteo do router (/#)
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import SimplePlot from "./pages/SimplePlot";
import ConfigurationOptions from "./pages/ConfigurationOptions";
import ScrollAndZoom from "./pages/ConfigurationOptions/ScrollAndZoom";
import EditableMode from "./pages/ConfigurationOptions/EditableMode";
import MakingStaticChart from "./pages/ConfigurationOptions/MakingStaticChart";
import CustomizeDownloadPlotOptions from "./pages/ConfigurationOptions/CustomizeDownloadPlotOptions";
import ForceTheModebarAlwaysBeVisible from "./pages/ConfigurationOptions/ForceTheModebarAlwaysBeVisible";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/simple-plot" exact component={SimplePlot} />
            {/* Configuration Options */}
            <Route path="/config-options" exact component={ConfigurationOptions} />
            <Route path="/config-options/scroll-and-zoom" exact component={ScrollAndZoom} />
            <Route path="/config-options/editable-mode" exact component={EditableMode} />
            <Route path="/config-options/making-static-chart" exact component={MakingStaticChart} />
            <Route path="/config-options/customize-download-plot-options" exact component={CustomizeDownloadPlotOptions} />
            <Route path="/config-options/force-the-modebar-always-be-visible" exact component={ForceTheModebarAlwaysBeVisible} />
        </BrowserRouter>
    );
}
