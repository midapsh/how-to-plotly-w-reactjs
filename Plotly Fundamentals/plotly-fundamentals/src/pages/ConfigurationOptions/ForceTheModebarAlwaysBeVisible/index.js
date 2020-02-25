import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

export default function CustomizeDownloadPlotOptions() {
    const [state, setState] = useState({});
    const [config, setConfig] = useState(undefined);

    useEffect(() => {
        let trace1 = {
            y: ['Marc', 'Henrietta', 'Jean', 'Claude', 'Jeffrey', 'Jonathan', 'Jennifer', 'Zacharias'],
            x: [90, 40, 60, 80, 75, 92, 87, 73],
            type: 'bar',
            orientation: 'h'
        };

        let data = [trace1,];

        let layout = {
            title: 'Always Display the Modebar',
            showlegend: false
        };

        setState({
            data: data,
            layout: layout,
            frames: undefined
        });

        let aux_config = {displayModeBar: true};
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
