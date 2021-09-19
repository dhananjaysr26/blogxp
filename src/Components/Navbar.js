import React, { useState } from 'react';
import "../index.css"
import { MdDashboard, MdLocalPostOffice, MdFindInPage } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";
function Navbar() {
    let history = useHistory();
    const [menu, setMenu] = useState(0);
    return (
        <div className={menu ? "sidebar-active" : "sidebar"}>
            <div className="sidebar-band">
                <h2>Hello Admin!</h2>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li onClick={() => { history.push("/"); setMenu(0); }}><MdDashboard className="sidebar-icons" /><a>Dashboard</a></li>
                    <li onClick={() => { history.push("/post-page"); setMenu(0); }}><MdLocalPostOffice className="sidebar-icons" />Post Page</li>
                    <li onClick={() => { history.push("/post-links"); setMenu(0); }}><MdFindInPage className="sidebar-icons" />Link Page</li>
                    <li onClick={() => { setMenu(0); alert("Coming Soon!"); }}><BsThreeDots className="sidebar-icons" />Others</li>
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
