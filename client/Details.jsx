import React from 'react';
import ShowMore from './ShowMore.jsx';

var Details = ({house, toggle, handleClick}) => {
    let key = 0;
    return (<div className="container-interior">
        <p className="more-info-title">INTERIOR FEATURES</p>
        <div className="interior-container-interior">
            <div className="container-bigger-fact">
                <h4>Bedrooms</h4>
                <div><span className="greyed-out">Beds: </span>{house.beds}</div>
            </div>
            <div className="container-bigger-fact">
                <h4>Heating and Cooling</h4>
                <div><span className="greyed-out">Heating: </span>{house.heating}</div>
                <div><span className="greyed-out">Cooling: </span>{house.cooling}</div>
            </div>
            <div className="container-bigger-fact">
                <h4>Basement</h4>
                <div><span>No basement</span></div>
            </div>
            <div className="container-bigger-fact">
                <h4>Appliances</h4>
                <div><span className="greyed-out">Appliances included: </span>
                    <div>{house.appliances.length ? house.appliances.join(', ') : "None"}</div>
                </div>
            </div>
            <div className="container-bigger-fact">
                <h4>Flooring</h4>
                <div><span className="greyed-out">Floor size: </span>{house.floorSize} sqft</div>
                <div><span className="greyed-out">Flooring: </span>{house.flooring}</div>
            </div>
            <div className="container-bigger-fact">
                <h4>Interior Features</h4>
                {house.interiorFeatures.map(feat => {
                    return (
                        <div key={key++}>{feat}</div>
                    )
                })}
                <div><span className="greyed-out">Room count: </span>{house.rooms}</div>
            </div>
            
        </div>
        {toggle ? <ShowMore house={house}/> : null}
        <button id="see-more" type="button" onClick={handleClick}>{toggle ? "See Fewer Facts and Features ▲ " : "See More Facts and Features ▼"}</button>
    </div>)
}
export default Details;