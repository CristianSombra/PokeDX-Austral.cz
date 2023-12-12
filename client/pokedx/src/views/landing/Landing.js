import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <p>Prueba de Landing</p>
            <button>
                <Link to="/home">Ingresar</Link>
            </button>
        </div>
    )
}

export default Landing;
