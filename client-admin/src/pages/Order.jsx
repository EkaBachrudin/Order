import React from 'react'
import Layouts from './layouts/layouts'
import ListOrder from '../components/order/ListOrder'

function Order() {
  

  return (
    <Layouts title={"Orders"}>
        <div class="row my-3">
            <div class="col-lg-12">
                <h3>All Orders</h3>
            </div>
        </div>
       <ListOrder/>
    </Layouts>
  )
}

export default Order