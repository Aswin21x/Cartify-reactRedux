import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, navigateToNextPage, navigateToPrevPage } from '../Slice/productSlice'
import { Col, Row, Spinner } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';


function Home() {
  const dispatch = useDispatch()
    const {allProducts,loading,error,productsPerPage,currentPage}= useSelector(state=>state.productReducer)
const totalPages = Math.ceil(allProducts?.length/productsPerPage)
const lastProductIndex = currentPage*productsPerPage
const firstProductIndex = lastProductIndex - productsPerPage
const visibleProductsCard = allProducts?.slice(firstProductIndex,lastProductIndex)

useEffect(()=>{
  dispatch(fetchProducts())
},[])
const HandlePrevPage = ()=>{
  if(currentPage!=1){
    dispatch(navigateToPrevPage())
  }
}
const handleNextPage =()=>{
  if(currentPage!=totalPages){
    dispatch(navigateToNextPage())
  }
}

    return (
      
      <>
          <Header insideHome></Header>

    <div style={{paddingTop:"60px"}}>

      {

        loading?<div className='mt-5 text-center mb-4'> <Spinner className='me-2' animation='border' variant='info'/> Loading wait here</div>:

       <Row className='m-5 bg-secondary  '>
{allProducts?.length>0?visibleProductsCard?.map((product,index)=>(
         <Col key={index} className='mb-3 my-3' sm={12} md={6} lg={4} xl={3}>

         <Card  className='bg-secondary shadow rounded' style={{ width: '16rem' , height:"22rem" }}>
      <Card.Img className='rounded p-2' variant="top" height={'200px'} src={product?.thumbnail} />
      <Card.Body>
        <Card.Title className='text-dark fw-bold'>{product?.title.slice(0,20)}...</Card.Title>
        <Link to={`/view/${product?.id}`}><Button 
         className='rounded  text-light bg-primary' >View</Button> </Link>
      </Card.Body>
    </Card>
         
         </Col>
      )): <div className='text-center'>Product Not Found</div> }  
       </Row>
      }
<div className='d-flex justify-content-center mt-5'>
  <span onClick={HandlePrevPage} style={{cursor:'pointer'}}><i  className='fa-solid fa-backward me-2'></i></span>
  <span className='fw-bold me-2'> {currentPage} of {totalPages} </span>
  <span onClick={handleNextPage} style={{cursor:"pointer"}}><i className='fa-solid fa-forward me-2'></i></span>

</div>

    </div>
    </>
  )
}

export default Home