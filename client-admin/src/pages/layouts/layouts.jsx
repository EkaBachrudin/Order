import React from 'react'
import { useState as UseState } from 'react';
import { MdOutlineMenu} from "react-icons/md";
import { Link } from 'react-router-dom';
import './style.css'

function layouts({children, title}) {
    const [isActive, setActive] = UseState(false);

    const menuToggle = () =>{
        setActive(!isActive);
    }

  return (
    <div>
        <div id="wrapper" className={isActive ? "toggled" : null}>
            <div id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand">
                        <a href="#">
                            Eka Restaurant
                        </a>
                    </li>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/order">Orders</Link>
                    </li>
                    <li>
                        <h4 className='mt-2'>Configuration</h4>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/table">Table</Link>
                    </li>
                </ul>
            </div>
            <div id="page-content-wrapper">
                <div class="container-fluid">
                <MdOutlineMenu onClick={menuToggle}/>
                   {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default layouts