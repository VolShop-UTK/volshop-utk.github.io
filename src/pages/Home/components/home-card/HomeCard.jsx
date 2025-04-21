import React from 'react';
import './homeCard.css';
import { NavLink } from 'react-router';

function HomeCard({ icon, title, path }) {
    return (
        <NavLink to={path}>
            <div class='homeCard'>
                <img src={icon} alt={title} />
                <h3>{title}</h3>
            </div>
        </NavLink>
    );
}

export default HomeCard;
