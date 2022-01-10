//'rfce' is a create shortcut REACT FUNCTION EXPORT COMPONENT
import React from 'react'
import './Navbar.css'


function Navbar() {
    return (
        <div className="Navbar">
            <div className="leftSide">
            <div className="links">
                    <a href="/home">Home</a> 
                    <a href="/feedback">Feedback</a>
                    <a href="/aboutus">About us</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search..."/>
                <button >Search</button>
            </div>
        </div>
    )
}
export default Navbar
