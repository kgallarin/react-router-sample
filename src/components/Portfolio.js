import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = (props) => 
(
    <div>
        <h1>Portfolio Page</h1>
        <p>This is Portfolio Page
        {props.match.params.id}</p>
        <ul>
            <li>
                <Link to="/portfolio/123">Portfolio 1</Link>
            </li>
            <li>
                <Link to="/portfolio/99">Portfolio 2</Link>
            </li>
        </ul>
    </div>
);

export default Portfolio;
