import React from 'react'
import Layouts from './layouts/layouts'
import ListMenu from '../components/menu/ListMenu'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <Layouts title={"menu"}>
        <div class="row my-3">
            <div class="col-lg-12 d-flex justify-content-between">
                <h3>All Menus</h3>
                <Link to="/menu/add" className='btn btn-outline-primary shadow'>Add Menu</Link>
            </div>
        </div>
        <ListMenu/>
    </Layouts>
  )
}

export default Menu