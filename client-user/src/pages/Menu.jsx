import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layouts from './layouts/Layouts'
import { useNavigate,  useParams} from 'react-router-dom';

const Menu = () => {
    const [menus, setMenus] = useState([])

    // Table Id
    const {id} = useParams();

    useEffect(()=>{
        getMenus();
    }, []);

    async function getMenus() {
        const response = await axios.get('http://localhost:5000/menus');
        setMenus(response.data);
    }


  return (
    <Layouts>
            <div className="row">
                    {menus.map((menu) => (
                        <div className="col-6 mb-4" key={menu._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h4>{menu.name}</h4>
                                    <hr />
                                    <p>Rp. {menu.price}</p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </Layouts>
  )
}

export default Menu