import React from 'react'
import Swal from 'sweetalert2'
import { useState } from 'react'

function ListOrder() {
  const [status, setStatus] = useState('Waiting')

  const changeStatus = () => {
    Swal.fire({
      title: 'Do you want to proccess this order?',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          if(status == "Proccess"){
            Swal.fire('Done!', '', 'success')
            setStatus('Done')
          }else{
            Swal.fire('Proccess!', '', 'success')
            setStatus('Proccess')
          }
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
              <th>Customer Name</th>
              <th>Table</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1234123dasd123</td>
              <td>Eka Bachrudin</td>
              <td>Table 08</td>
              <td>
                <div className={
                    status == 'Done' ? 'btn-sm btn btn-outline-secondary shadow-sm disabled'
                  : status == 'Proccess' ? 'btn-sm btn btn-outline-success shadow-sm'
                  : 'btn-sm btn btn-outline-warning shadow-sm' } 
                  onClick={()=>changeStatus()}>{status}</div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ListOrder