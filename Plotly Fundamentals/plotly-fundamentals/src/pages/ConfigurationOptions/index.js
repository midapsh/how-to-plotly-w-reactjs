import React from 'react';
import { Link } from "react-router-dom";

export default function ConfigurationOptions() {
    return (
        <>
            <div>
                <Link to="/" >
                    Go Home
                </Link >
            </div>
            <div>
                <Link to="/config-options/scroll-and-zoom" >
                    Go to Scroll and Zoom
                </Link >
            </div>
            <div>
                <Link to="/config-options/editable-mode" >
                    Go to Editable Mode
                </Link >
            </div>
            <div>
                <Link to="/config-options/making-static-chart" >
                    Go to Making a Static Chart
                </Link >
            </div>
            <div>
                <Link to="/config-options/customize-download-plot-options" >
                    Go to Customize Download Plot Options
                </Link >
            </div>
            <div>
                <Link to="/config-options/force-the-modebar-always-be-visible" >
                    Go to Force The Modebar to Always Be Visible
                </Link >
            </div>
            
        </>
    );
}
