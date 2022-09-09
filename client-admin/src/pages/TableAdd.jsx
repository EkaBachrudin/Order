import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layouts from './layouts/layouts'
import Swal from 'sweetalert2';
import axios from 'axios';

function TableAdd() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async  (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:5000/tables", {
                name
            });
              Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Success add menu'
              })
            navigate("/table")
        } catch (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Oops Error',
                showConfirmButton: false,
                timer: 2000
              })
            console.log(error);
        }
    }
  return (
    <Layouts title={"add menu"}>
        <div class="row my-3">
            <div class="col-lg-12 d-flex justify-content-between">
                <h3>Add Table</h3>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-md-4">
                <div className="card shadow">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <input 
                            class="form-control" 
                            type="text" 
                            value={name} 
                            onChange={(e)=> setName(e.target.value)}
                            placeholder="Table Name"/>
                            <br />
                            <button type='submit' className='btn btn-primary btn-sm shadow'>Add Table</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Layouts>
  )
}

export default TableAdd