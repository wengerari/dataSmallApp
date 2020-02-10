import React from "react";

import './additional-data.styles.scss';

const AdditionalData = ({clickedItem}) => (
    <div className="additional-data">
        <div className="additional-data__item">{clickedItem.description}</div>
        <div className="additional-data__item">{clickedItem.address.streetAddress}</div>
        <div className="additional-data__item">{clickedItem.address.city}</div>
        <div className="additional-data__item">{clickedItem.address.state}</div>
        <div className="additional-data__item">{clickedItem.address.zip}</div>   
    </div>
)

export default AdditionalData;