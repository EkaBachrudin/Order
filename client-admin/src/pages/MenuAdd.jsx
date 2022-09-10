import React from 'react'
import { useNavigate } from 'react-router-dom';
import Layouts from './layouts/layouts'
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2'

const MenuAdd = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async  (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:5000/menus", {
                name,
                price
            });
              Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Success add menu'
              })
            navigate("/menu")
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
        <div className="row my-3">
            <div className="col-lg-12 d-flex justify-content-between">
                <h3>Add Menu</h3>
            </div>
        </div>
        <div className="row my-3">
            <div className="col-md-4">
                <div className="card shadow">
                    <div className="card-body">
                        <form onSubmit={(event => handleSubmit(event))}>
                            <input 
                            className="form-control" 
                            value={name} 
                            onChange={(e)=> setName(e.target.value)}
                            type="text" 
                            placeholder="Menu Name"/>
                            <br />
                            <input 
                            className="form-control" 
                            value={price} 
                            onChange={(e)=> setPrice(e.target.value)}
                            type="number"
                            min="1" 
                            placeholder="Menu Price"/>
                            <br />
                            <button type='submit' className='btn btn-primary btn-sm shadow'>Add Menu</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Layouts>
  )
}

export default MenuAdd