import React from 'react';
var ShowMore = ({house}) => {
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
    );
}
export default ShowMore;