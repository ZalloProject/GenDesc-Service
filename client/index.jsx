import React from 'react';
import ReactDOM from 'react-dom';



class GenDesc extends React.Component{
    constructor(props) {
        super();
        this.state = {
            house: props.house
        }
        console.log(props.house);
    }
    render() {
        const {house} = this.state;
        return (
            <div className="container-main">
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
                        <h5>FOR SALE</h5>
                        <h1>${new Intl.NumberFormat().format(house.price)}</h1>
                        <div className="todo">TODO: Mortgage estimate calculator</div>
                    </div>

                </div>
                <div className="container-facts">
                    <div className="container-facts-items">
                        <div className="fact" id="facts-type">
                            <img src="https://image.flaticon.com/icons/svg/1555/1555466.svg"></img>
                            <div>
                                <h4>Type</h4>
                                <p>{house.type}</p>
                            </div>
                        </div>
                        <div className="fact" id="facts-year">
                            <img src="https://image.flaticon.com/icons/svg/1459/1459097.svg"></img>
                            <div>
                                <h4>Year Built</h4>
                                <p>{house.year}</p>
                            </div>
                            
                        </div>
                        <div className="fact" id="facts-heating">
                            <img src="https://image.flaticon.com/icons/svg/671/671766.svg"></img>
                            <div>
                                <h4>Heating</h4>
                                <p>{house.heating}</p>
                            </div>
                            
                        </div>
                        <div className="fact" id="facts-cooling">
                            <img src="https://image.flaticon.com/icons/svg/248/248793.svg"></img>
                            <div>
                                <h4>Cooling</h4>
                                <p>{house.cooling}</p>
                            </div>
                        </div>
                        <div className="fact" id="facts-parking">
                            <img src="https://image.flaticon.com/icons/svg/818/818383.svg"></img>
                            <div>
                                <h4>Parking</h4>
                                <p>{house.parking} spaces</p>
                            </div>
                        </div>
                        <div className="fact" id="facts-lotSize">
                            <img src="https://image.flaticon.com/icons/svg/47/47718.svg"></img>
                            <div>
                                <h4>Lot</h4>
                                <p>{Intl.NumberFormat().format(house.lotSize)} sqft</p>
                            </div>
                        </div>
                        <div className="fact" id="facts-daysListed">
                            <img src="https://image.flaticon.com/icons/svg/149/149316.svg"></img>
                            <div>
                                <h4>Days on Zallo</h4>
                                <p>{house.daysListed} days</p>
                            </div>
                        </div>
                        <div className="fact" id="facts-ppsqft">
                            <img src="https://image.flaticon.com/icons/svg/38/38786.svg"></img>
                            <div>
                                <h4>Price/sqft</h4>
                                <p>${Intl.NumberFormat().format(Math.floor(house.price / house.lotSize))}</p>
                            </div>
                            
                        </div>
                        <div className="fact" id="facts-saves">
                            <img src="https://image.flaticon.com/icons/svg/126/126486.svg"></img>
                            <div>
                                <h4>Saves</h4>
                                <p>{house.saves}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    } 

}
fetch(`/houses/${Math.floor(Math.random()*100)}`)
        .then(res => res.json())
        .then(house => ReactDOM.render(<GenDesc house={house}/> , document.getElementById('app')))
        .catch(err => console.log(err));
