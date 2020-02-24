import React from 'react';
import Plotly from "plotly.js";
// js-basic-dist
// https://www.npmjs.com/package/react-plotlyjs
// https://www.npmjs.com/package/plotly.js/v/1.47.4
// https://github.com/plotly/react-plotly.js#build-with-create-react-app

// ***   SOLUTION   ***
// https://github.com/plotly/react-plotly.js/issues/135
import createPlotlyComponent from 'react-plotly.js/factory';
import "./Main.css";

const Plot = createPlotlyComponent(Plotly);

export default function Main() {
    return (
        <Plot
            data={[
                {
                    x: [1, 2, 3, 4, 5, 6,],
                    y: [2, 6, 3, 4, 4, 4,],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'red' },
                },
                { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{ width: 1200, height: 800, title: 'A Fancy Plot' }}
        />
    );
}
