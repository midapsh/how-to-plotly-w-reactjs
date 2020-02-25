import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div>
                <Link to="/simple-plot" >
                    Go to Simple Plot
                </Link >
            </div>
            <div>
                <Link to="/config-options" >
                    Go to Config Options
                </Link >
            </div>
        </>
    );
}
