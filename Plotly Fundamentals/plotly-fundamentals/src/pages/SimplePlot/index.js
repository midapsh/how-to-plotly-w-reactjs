import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import Plotly from "plotly.js";
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

export default function SimplePlot() {
    const [state, setState] = useState({});
    const [config, setConfig] = useState(undefined);

    useEffect(() => {
        setState({
            data: [
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'red' },
                },
                { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ],
            layout: { width: 320, height: 240, title: 'A Fancy Plot' },
            frames: undefined
        });

        return;
    }, []);

    return (
        <>
            <div>
                <Link to="/" >
                    Go Home
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
        </>
    );
}
