import React from 'react';
import { locations } from '../../lib/locations';
import { Link } from 'react-router-dom';

export default function Locations() {
    const mappedLocations = locations.map(e => <Link to={`/locations/${e}`} key={locations.indexOf(e) + 1}><div className="location-card" ><h2>{e}</h2></div></Link>)
    return (
        <div className="container container-fade-in-and-translate">
            <h1 className="page-header">Locations</h1>   
            <div className="location-grid">
                {mappedLocations}
            </div>
        </div>
    )
}