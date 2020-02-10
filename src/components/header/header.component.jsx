import React from "react";

import "./header.styles.scss";


const Header = ({sortElements, sortToogle}) => (
        <div className="header">
            <div>id <button element="id" onClick={sortElements}>{sortToogle.boolean && sortToogle.currentItem==="id" ? "⇓" : "⇑"}</button></div>
            <div>firstName <button element="firstName" onClick={sortElements}>{sortToogle.boolean && sortToogle.currentItem==="firstName" ? "⇓" : "⇑"}</button></div>
            <div>lastName <button element="lastName" onClick={sortElements}>{sortToogle.boolean && sortToogle.currentItem==="lastName" ? "⇓" : "⇑"}</button></div>
            <div>email <button element="email" onClick={sortElements}>{sortToogle.boolean && sortToogle.currentItem==="email" ? "⇓" : "⇑"}</button></div>
            <div>phone <button element="phone" onClick={sortElements}>{sortToogle.boolean && sortToogle.currentItem==="phone" ? "⇓" : "⇑"}</button></div>
        </div>
)

export default Header;