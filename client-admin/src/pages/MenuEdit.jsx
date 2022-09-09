import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate,  useParams} from 'react-router-dom';
import Swal from 'sweetalert2'
import Layouts from './layouts/layouts'

function MenuEdit() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getMenuById();
    }, []); 

    const updateMenu = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/menus/${id}`, {
                name,
                price
            });
            navigate("/menu")
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

    const getMenuById = async () => {
        const response = await axios.get(`http://localhost:5000/menus/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
    }
  return (
    <Layouts title={"Edit menu"}>
    <div class="row my-3">
        <div class="col-lg-12 d-flex justify-content-between">
            <h3>Edit Menu</h3>
        </div>
    </div>
    <div class="row my-3">
        <div class="col-md-4">
            <div className="card shadow">
                <div className="card-body">
                    <form onSubmit={updateMenu}>
                        <input 
                        class="form-control" 
                        type="text" 
                        value={name} 
                        onChange={(e)=> setName(e.target.value)}
                        placeholder="Menu Name"/>
                        <br />
                        <input 
                        class="form-control" 
                        type="number"
                        value={price} 
                        onChange={(e)=> setPrice(e.target.value)}
                        min="1" 
                        placeholder="Menu Price"/>
                        <br />
                        <button type='submit' className='btn btn-primary btn-sm shadow'>Edit Menu</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</Layouts>
  )
}

export default MenuEdit