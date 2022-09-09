import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { MdEditNote, MdOutlineDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';

function TableList() {
    const [tables, setTables] = useState([])

    useEffect(()=>{
        getTables();
    }, []);
    
    async function getTables() {
        const response = await axios.get('http://localhost:5000/tables');
        setTables(response.data);
    }
    
    const remove = (id) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`http://localhost:5000/tables/${id}`)
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                getTables();
            }
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
      <div className="row">
          <div className="col-12">
              <div className="card shadow">
                  <div className="card-body">
                  <table className="table table-striped">
                      <thead>
                          <tr>
                              <th>No</th>
                              <th>Table Name</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                      {tables.map((table, index) => (
                            <tr key={table._id}>
                                <td>{index + 1}</td>
                                <td>{table.name}</td>
                                <td>
                                    <Link to={`/table/edit/${table._id}`} className='text-primary'><MdEditNote fontSize={"22px"}/></Link>
                                    <Link to="#" className='text-danger ms-3'><MdOutlineDeleteForever fontSize={"22px"} onClick={()=> remove(table._id)}/></Link>
                                </td>
                            </tr>
                        ))}
                      </tbody>
                  </table>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default TableList