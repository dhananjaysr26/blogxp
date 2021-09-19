import React, { useState } from 'react';
import "../index.css"
import { MdDashboard, MdLocalPostOffice, MdFindInPage } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
function Navbar() {
    const [menu, setMenu] = useState(0);
    return (
        <div className={menu ? "sidebar-active" : "sidebar"}>
            <div className="sidebar-band">
                <h2>Hello Admin!</h2>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li><MdDashboard className="sidebar-icons" /><a>Dashboard</a></li>
                    <li><MdLocalPostOffice className="sidebar-icons" />Post Page</li>
                    <li><MdFindInPage className="sidebar-icons" />Link Page</li>
                    <li><BsThreeDots className="sidebar-icons" />Others</li>
                </ul>
            </div>
            <div className="header-content">
                <header>
                    {menu ?
                        <FaPlus style={{ fontSize: "50px", cursor: "pointer", transform: "rotateZ(45deg)", transition: "0.5s" }} onClick={() => menu ? setMenu(0) : setMenu(1)} />
                        : <BiMenu style={{ fontSize: "50px", cursor: "pointer" }} onClick={() => menu ? setMenu(0) : setMenu(1)} />

                    }
                    <h1 className="header-menu">BlogXP</h1>
                </header>
            </div>

        </div>
    )
}

export default Navbar
