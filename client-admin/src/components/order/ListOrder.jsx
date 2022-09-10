import React from 'react'
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import axios from 'axios'


function ListOrder() {
  const [orders, setOrders] = useState([])
  const [status, setStatus] = useState("");

  useEffect(()=>{
    getOrders();
  }, []);

  async function getOrders() {
      const response = await axios.get('http://localhost:5000/orders');
      const ordersData = response.data;
      setOrders(ordersData)
  }

  const updateStatus = async (id) => {
    await axios.patch(`http://localhost:5000/orders/${id}`, {
      status
    })
    getOrders();
  }

  useEffect(() => {
    const socket = io('ws://localhost:5000')

    socket.on('connnection', () => {
      console.log('connected to server');
    })

    socket.on('order-added', (newOrders) => {
      setOrders(newOrders)
    })

    socket.on('message', (message) => {
      console.log(message);
    })

    socket.on('disconnect', () => {
      console.log('Socket disconnecting');
    })

  }, [])

  const changeStatus = (x, id) => {
    Swal.fire({
      title: 'Do you want to proccess this order?',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if(x === "Waiting"){
          setStatus("Process");
        }else if(x === "Process"){
          setStatus("Done");
        }
        updateStatus(id);
        Swal.fire('Greate!', '', 'success')
      }
    })
  }
  return (
    <div className="row">
    <div className="col-12">
      <div className="card shadow">
        <div className="card-body">
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>No Order</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {orders.map((order, index) => (
              <tr key={order._id}>
                  <td>{order.no_order}</td>
                <td>
                  <div className={
                      order.status == 'Done' ? 'btn-sm btn btn-outline-secondary shadow-sm disabled'
                    : order.status == 'Process' ? 'btn-sm btn btn-outline-success shadow-sm'
                    : 'btn-sm btn btn-outline-warning shadow-sm' } 
                    onClick={()=>changeStatus(order.status, order._id)}>{order.status}</div>
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

export default ListOrder