import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import Plotly from "plotly.js";
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

export default function EditableMode() {
    const [state, setState] = useState({});
    const [config, setConfig] = useState({ editable: true });

    useEffect(() => {
        let trace1 = {
            x: [0, 1, 2, 3, 4],
            y: [1, 5, 3, 7, 5],
            mode: 'lines+markers',
            type: 'scatter'
        };

        let trace2 = {
            x: [1, 2, 3, 4, 5],
            y: [4, 0, 4, 6, 8],
            mode: 'lines+markers',
            type: 'scatter'
        };
        let data = [trace1, trace2];
        setState({
            data: data,
            layout: { title: 'Click Here<br>to Edit Chart Title' },
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
