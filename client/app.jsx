import React from 'react';
import ReactDOM from 'react-dom';
class GenDesc extends React.Component{
    constructor(props) {
        super();
        this.state = {
            house: props.house,
            toggle: false
        }
    }
    showMore(house){
        return (
            <div className="container-interior">
                <hr/>
                    <p className="more-info-title">SPACES AND AMENITIES</p>
                    <div className="interior-container-interior">
                        <div className="container-bigger-fact">
                            <h4>Size</h4>
                            <div><span className="greyed-out">Unit Count: </span>0</div>
                        </div>
                        <div className="container-bigger-fact">
                            <h4>Spaces</h4>
                            <div>{house.spaces}</div>
                        </div>
                    </div>
                    <hr />
                    <p className="more-info-title">CONSTRUCTION</p>
                    <div className="interior-container-interior">
                        <div className="container-bigger-fact">
                            <h4>Type and Style</h4>
                            <div><span className="greyed-out">Structure Type: </span>{house.construction}</div>
                            <div>{house.type}</div>
                        </div>
                        <div className="container-bigger-fact">
                            <h4>Materials</h4>
                            <div><span className="greyed-out">Roof Type: </span>{house.roof}</div>
                            <div><span className="greyed-out">Exterior Material: </span>{house.exterior}</div>
                        </div>
                        <div className="container-bigger-fact">
                            <h4>Dates</h4>
                            <div>Built in {house.year}</div>
                        </div>
                        <div className="container-bigger-fact">
                            <h4>Other Construction Features</h4>
                            <div><span className="greyed-out">Stories: </span>{house.stories}</div>
                        </div>
                    </div>
            </div>
        )
    }
    render() {
        const {house} = this.state;
        console.log(house);
        const quickFacts = {
            type: {
                label: "Type",
                img: "https://image.flaticon.com/icons/svg/1555/1555466.svg",
                val: house.type
            },
            year: {
                label: "Year",
                img: "https://image.flaticon.com/icons/svg/1459/1459097.svg",
                val: house.year
            },
            heating: {
                label: "Heating",
                img: "https://image.flaticon.com/icons/svg/671/671766.svg",
                val: house.heating
            },
            cooling: {
                label: "Cooling",
                img: "https://image.flaticon.com/icons/svg/248/248793.svg",
                val: house.cooling
            },
            parking: {
                label: "Parking",
                img: "https://image.flaticon.com/icons/svg/818/818383.svg",
                val: house.parking
            },
            lot: {
                label: "Lot",
                img: "https://image.flaticon.com/icons/svg/47/47718.svg",
                val: Intl.NumberFormat().format(house.lotSize) + " sqft"
            },
            listed: {
                label: "Days on Zallo",
                img: "https://image.flaticon.com/icons/svg/149/149316.svg",
                val: house.daysListed + " days"
            },
            ppsqft: {
                label: "Price/sqft",
                img: "https://image.flaticon.com/icons/svg/38/38786.svg",
                val: '$' + Intl.NumberFormat().format(Math.floor(house.price / house.lotSize))
            },
            saves: {
                label: "Saves",
                img: "https://image.flaticon.com/icons/svg/126/126486.svg",
                val: house.saves
            }
        }
        let key = 0;
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
                    <h3>Facts and Features</h3>
                    <div className="container-facts-items">
                        {Object.entries(quickFacts).map(fact => {
                            let id = fact[0];
                            fact = fact[1];
                            return (
                                <div key={key++} className="fact" id={`facts-${id}`}>
                                <img src={fact.img}></img>
                                <div>
                                    <h4>{fact.label}</h4>
                                    <p>{fact.val}</p>
                                </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr/>
                <div className="container-interior">
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
                    {this.state.toggle ? this.showMore(house) : null}
                    <button id="see-more" type="button" onClick={() => this.setState({toggle: !this.state.toggle})}>{this.state.toggle ? "See Fewer Facts and Features ▲ " : "See More Facts and Features ▼"}</button>
                </div>
                
            </div>
        );
    } 

}
export default GenDesc;