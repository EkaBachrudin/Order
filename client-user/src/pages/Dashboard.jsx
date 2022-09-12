import React from 'react'
import Layouts from './layouts/Layouts'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Dashboard = () => {
    const [tables, setTables] = useState([])

    useEffect(()=>{
        getTables();
    }, []);
    
    async function getTables() {
        const response = await axios.get('http://localhost:5000/tables');
        setTables(response.data);
    }

  return (
    <div>
        <Layouts>
            <div className="row">
            {tables.map((table, index) => (
                <div className="col-6 mb-4" key={table._id}>
                    <div className="card">
                        <div className="card-body">
                            <h4>{table.name}</h4>
                            <Link to={`/menu/${table._id}`}>To This Table</Link>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </Layouts>
    </div>
  )
}

export default Dashboard