import React, {Component} from 'react'
import {Button} from 'react-bootstrap';
import '../layout/HeaderBlock.css'
import { auth, db, logout } from "../firebase/firebase.js";

function HeaderBlock() {
    return (
        <>
        <div className="headerBlock">
            <div className="headerBlock_info">
            <div className="headerBlock_infoText">
                <h1>Mercedes Gle coupé</h1>
                <h4>Order online
                    <span>For the price you want</span>
                </h4>
                </div>
                <div className="headerBlock_actions">
                    <button className="headerBlock_buttonPrimary" onClick={logout}>Custom order</button>
                    <button className="headerBlock_buttonSecondary">
                        Existing inventory</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeaderBlock
