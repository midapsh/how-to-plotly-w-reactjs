import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

export default function MakingStaticChart() {
    const [state, setState] = useState({});
    const [config, setConfig] = useState(undefined);

    useEffect(() => {
        let trace1 = {
            x: [0, 1, 2, 3, 4, 5, 6],
            y: [1, 9, 4, 7, 5, 2, 4],
            mode: "markers",
            marker: {
                size: [20, 40, 25, 10, 60, 90, 30],
            }
        };

        let data = [trace1,];

        let layout = {
            title: "Create a Static Chart",
            showlegend: false
        };
        setState({
            data: data,
            layout: layout,
            frames: undefined
        });

        setConfig({ staticPlot: true, });

        return;
    }, []);

    return (
        <div>
            <div>
                <Link to="/config-options" >
                    Go to Config Options
                </Link >
            </div>
            <Plot
                data={state.data}
                layout={state.layout}
                frames={state.frames}
                config={config}
                onInitialized={(figure) => setState(figure)}
                onUpdate={(figure) => setState(figure)}
            />
        </div>
    );
}
