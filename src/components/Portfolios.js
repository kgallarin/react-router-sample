import React from 'react';
import { Link } from 'react-router-dom';

const Portfolios = (props) => {
    return (
    <div>
        <h1>Portfolio Solo</h1>
        <p>id {props.match.params.id}</p>

        <Link to="/portfolio">Go Back</Link>
    </div>
);}

export default Portfolios;