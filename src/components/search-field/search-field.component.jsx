import React from "react";

import "./search-field.style.scss";

const SearchField = ({handleChange}) => (
    <div className="search-field">
        <input type="search" placeholder="search" element="id" onChange={handleChange} />
        <input type="search" placeholder="search" element="firstName" onChange={handleChange} />
        <input type="search" placeholder="search" element="lastName" onChange={handleChange} />
        <input type="search" placeholder="search" element="email" onChange={handleChange} />
        <input type="search" placeholder="search" element="phone" onChange={handleChange} />
    </div>
)

export default SearchField;