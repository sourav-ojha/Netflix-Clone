import React, { useEffect, useState } from 'react'
import "./css/Navbar.css"
export default function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){ // 100px from y axis
                handleShow(true);
            }else
                handleShow(false);
            
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
            />
            <div className={`creditb ${show && "credit"}`}>
                Hey !! this is netflix clone
                <h6>created by : sourav ojha</h6>
            </div>
            <img
            className="nav_avtar"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/120px-Netflix-avatar.png"
            alt="logo"
            />
            </div>
    );
}
