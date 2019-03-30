import React from 'react';
import MortgageCalculator from './MortgageCalculator.jsx';

var TopDescription = ({house}) => {
    return (
    <div className="container-top">
        <div className="container-general-description">
            <div className="line1">
                <h1 className="line1-h1">{house.address.split('\n')[0]}</h1>
            </div>
            <div className="line2">
                <h2 className="line2-h2">{house.address.split('\n')[1]}</h2>
            </div>
            <div className="light-facts">
                <h3>
                    <span>{house.beds} beds</span>
                    <span> - </span>
                    <span>{house.baths} baths</span>
                    <span> - </span>
                    <span> {Intl.NumberFormat().format(house.floorSize)} sqft</span>
                </h3>
            </div>
            <div className="description-body">
                <p>{house.description}</p>
            </div>
        </div>
        <div className="container-price-description">
            <h5><div id="red-dot"></div> FOR SALE</h5>
            <h1>${new Intl.NumberFormat().format(house.price)}</h1>
            <p id="estimate-title">EST. MORTGAGE</p>
            <MortgageCalculator house={house} />            
        </div>
    </div>
    )
}
export default TopDescription;