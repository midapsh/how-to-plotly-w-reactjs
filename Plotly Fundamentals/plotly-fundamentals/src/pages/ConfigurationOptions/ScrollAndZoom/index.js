import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import Plotly from "plotly.js";
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

export default function ScrollAndZoom() {
    const [state, setState] = useState({});
    const [config, setConfig] = useState({ scrollZoom: true });

    useEffect(() => {
        setState({
            data: [
                {
                    x: ['2020-10-04', '2021-11-04', '2023-12-04'],
                    y: [90, 40, 60],
                    type: 'scatter',
                },
            ],
            layout: {
                title: 'Scroll and Zoom',
                showlegend: false
            },
            frames: undefined
        });

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
