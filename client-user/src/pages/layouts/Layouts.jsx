import React from 'react'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { MdShoppingCart } from "react-icons/md";

const Layouts = ({children}) => {

  return (
    <div>
        <nav className="navbar bg-light shadow mb-3 py-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  Order Makanan
                </Link>
                <button type="button" className=" btn btn-primary position-relative">
                        <MdShoppingCart fontSize={"25px"}/>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            1
                            <span className="visually-hidden">Total order</span>
                        </span>
                </button>
            </div>
        </nav>

        <div className="container-fluid">
        {children}
        </div>
    </div>
  )
}

export default Layouts