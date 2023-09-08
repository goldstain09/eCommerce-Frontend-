import React from 'react'
import Card from './Card'

export default function SuggestiveProductsUnderProductPage() {
  return (
    <>
    <div className="container mt-5">
        <h1 className='h1 mb-5' style={{fontFamily:" 'Inter', sans-serif"}}>
            People Also Viewed
        </h1>
        <div className="row d-flex">
            
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    </>
  )
}
