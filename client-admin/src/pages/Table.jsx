import React from 'react'
import Layouts from './layouts/layouts'
import { Link } from 'react-router-dom'
import TableList from '../components/table/TableList'

function Table() {
  return (
    <Layouts title={"Table"}>
        <div class="row my-3">
            <div class="col-lg-12 d-flex justify-content-between">
                <h3>All Tables</h3>
                <Link to="/table/add" className='btn btn-outline-primary shadow'>Add Table</Link>
            </div>
        </div>
        <TableList/>
    </Layouts>
  )
}

export default Table