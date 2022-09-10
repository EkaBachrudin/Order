import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layouts from './layouts/layouts'
import Swal from 'sweetalert2';
import axios from 'axios';

function TableEdit() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getTableById();
    }, []); 

    const updateTable = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/tables/${id}`, {
                name
            });
            navigate("/table")
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Menu has been updated',
                showConfirmButton: false,
                timer: 2000
              })
        } catch (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Check your input",
                showConfirmButton: false,
                timer: 2000
              })
            console.log(error);
        }
    };

    const getTableById = async () => {
        const response = await axios.get(`http://localhost:5000/tables/${id}`);
        setName(response.data.name);
    }
  return (
    <Layouts title={"add menu"}>
        <div className="row my-3">
            <div className="col-lg-12 d-flex justify-content-between">
                <h3>Edit Table</h3>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-md-4">
                <div className="card shadow">
                    <div className="card-body">
                        <form onSubmit={updateTable}>
                            <input 
                            className="form-control" 
                            type="text" 
                            value={name} 
                            onChange={(e)=> setName(e.target.value)}
                            placeholder="Table Name"/>
                            <br />
                            <button type='submit' className='btn btn-primary btn-sm shadow'>Edit Table</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Layouts>
  )
}

export default TableEdit