import React from 'react'
import Layouts from './layouts/layouts'
function Dashboard() {
  return (
    <div>
        <Layouts title={"Dashboard"}>
        <div className="row">
            <div className="col-lg-12">
                <h1>Welcome</h1>
            </div>
        </div>
        </Layouts>
    </div>
  )
}

export default Dashboard