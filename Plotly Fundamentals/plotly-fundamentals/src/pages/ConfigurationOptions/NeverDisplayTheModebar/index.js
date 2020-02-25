import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

export default function NeverDisplayTheModebar() {
    const [state, setState] = useState({});
    const [config, setConfig] = useState(undefined);

    useEffect(() => {
        let trace1 = {
            x: ['Zebras', 'Lions', 'Pelicans'],
            y: [90, 40, 60],
            type: 'bar',
            name: 'New York Zoo'
        };

        let trace2 = {
            x: ['Zebras', 'Lions', 'Pelicans'],
            y: [10, 80, 45],
            type: 'bar',
            name: 'San Francisco Zoo'
        };

        let data = [trace1, trace2,];

        let layout = {
            title: 'Hide the Modebar',
            showlegend: true
        };

        setState({
            data: data,
            layout: layout,
            frames: undefined
        });

        let aux_config = { displayModeBar: false };
        setConfig(aux_config);

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
