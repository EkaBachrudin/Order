import React from 'react'
import { useEffect, useState } from 'react';
import { MdEditNote, MdOutlineDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';

function ListMenu() {
    const [menus, setMenus] = useState([])

    useEffect(()=>{
        getMenus();
    }, []);
    
    async function getMenus() {
        const response = await axios.get('http://localhost:5000/menus');
        setMenus(response.data);
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
                await axios.delete(`http://localhost:5000/menus/${id}`)
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
                getMenus();
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
                              <th>Menu Name</th>
                              <th>Price</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                      {menus.map((menu, index) => (
                           <tr key={menu._id}>
                                <td>{index + 1}</td>
                                <td>{menu.name}</td>
                                <td>{menu.price}</td>
                                <td>
                                    <Link to={`/menu/edit/${menu._id}`} className='text-primary'><MdEditNote fontSize={"22px"}/></Link>
                                    <Link to="#" className='text-danger ms-3'><MdOutlineDeleteForever fontSize={"22px"} onClick={()=> remove(menu._id)}/></Link>
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

export default ListMenu