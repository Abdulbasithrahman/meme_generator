import React from "react";
 

export default function Navbar(){
    return(
        <div className="nav">
            <div className="nav-title">
        <div><img className="nav-logo" src="./mem.png" alt="bose"/></div>
                <h2 className="nav-name">MemeGenerator</h2>
            </div>
            <p className="nav-menu">React Course-Project 3</p>
        </div>
    )
}