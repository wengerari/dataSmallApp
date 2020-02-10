import React from "react";

import "./data-preview.styles.scss";



const DataPreview  = ({persons,handleClick}) => (
    <div className="data-preview">
        {
            persons.map(person => (
                <div id={person.id} className="data-line" onClick={handleClick}>
                    <div className="item" >{person.id}</div>
                    <div className="item" >{person.firstName}</div>
                    <div className="item" >{person.lastName}</div>
                    <div className="item" >{person.email}</div>
                    <div className="item" >{person.phone}</div>
                </div>
            ))
        }
    </div>
) 

    

    


export default DataPreview;