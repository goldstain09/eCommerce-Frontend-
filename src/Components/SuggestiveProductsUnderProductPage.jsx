import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsDataStart } from '../Redux/action';

export default function SuggestiveProductsUnderProductPage({product}) {
  const dispatch = useDispatch();
  const allProductsData = useSelector((state)=>state.allProductsData);
  const [allSuggestiveProducts,setAllSuggestiveProducts] = useState([]);
  useEffect(()=>{
    dispatch(getAllProductsDataStart());
  },[])
  useEffect(()=>{
    if(allProductsData.length>0 && product.hasOwnProperty('productTitle')){
      const SameCategoryProducts = allProductsData.filter((item)=>item.productCategory === product.productCategory);
      const SuggestiveProducts = SameCategoryProducts.filter((item)=> item._id.toString() !== product._id.toString());
      setAllSuggestiveProducts(SuggestiveProducts)
    }
  },[allProductsData,product])
  return (
    <>
    <div className="container mt-5">
        <h1 className='h1 mb-5' style={{fontFamily:" 'Inter', sans-serif"}}>
            People Also Viewed
        </h1>
        <div className="row d-flex">
            {
              allSuggestiveProducts.length>0 ? allSuggestiveProducts.map((item,index)=>(
                <Card key={index} item={item} />
              )) : (<><h1>No Products Related to this product...</h1></>)
            }
        </div>
    </div>
    </>
  )
}
