import React from 'react'

export default function PaymentMethod() {
  return (
    <>
    <div className="container">
        <div className="row d-flex">
            <h3 className='h1'>Payment Method</h3>
            <div className="col col-10 mt-5">
                <h1 className='h3'><i class="bi bi-cash text-success"> </i>Cash on Delivery</h1>
            </div>
            <div className="col col-1 mt-5">
                <input type="radio" style={{width:'2rem',height:'2rem'}} />
            </div>
        </div>
    </div>
    </>
  )
}
