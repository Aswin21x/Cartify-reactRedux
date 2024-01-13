import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { removeFromWishlist } from '../Slice/wishlistSlice';
import { addToCart } from '../Slice/cartSlice';
import Header from '../Components/Header';

function Wishlist() {
//get wishlist from store

const wishlist = useSelector(state=>state.wishlistReducer)
const dispatch = useDispatch()
// console.log(wishlist);

//cart
const handleCart = (product)=>{
  dispatch(removeFromWishlist(product.id))
  dispatch(addToCart(product))
}

  return (
    
    <>
    <Header></Header>
    <div style={{paddingTop:'100px '}}>
      <div className=' container d-flex justify-content-center '>

<Row className=" row-cols-1 row-cols-md-3  justify-content-around ">

 { wishlist?.length>0?wishlist.map((product,index)=>(
  
<Col className='mb-4'  key={index}   >

  <Card className='rounded shadow m-4 ' style={{ width: '16rem' , height:"22rem" }}>
  <Card.Img className='rounded p-2 ' height='200px' variant="top" src={product?.thumbnail} />
  <Card.Body>
    <Card.Title className='fw-bold text-center text-dark'>{product?.title.slice(0,20)}...</Card.Title>

    <div className='d-flex justify-content-around'>
    <Button onClick={()=>dispatch(removeFromWishlist(product?.id))} variant="danger"><i className='fa-solid fa-heart-circle-minus text-danger'></i></Button>
    <Button onClick={()=>handleCart(product)} variant="success"><i className='fa-solid fa-cart-plus text-success'></i></Button>
    </div>
  </Card.Body>
</Card>
  
  </Col> )) :

  
  <div className='text-center'>
<i class="fa-regular fa-face-frown fa-2xl"></i>

    <h2 className='my-3 text-dark'>Your Wishlist is empty</h2>
  </div>
  } 
</Row>





</div>
    </div>

    </>
    
    
  )
}

export default Wishlist