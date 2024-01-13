import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchByProduct } from '../Slice/productSlice';


function Header({insideHome}) {
const wishlist = useSelector(state=>state.wishlistReducer)
// const [wishlistCount,setWishlistCount]= useState(0)
// useEffect(()=>{
//   setWishlistCount(wishlist?.length)
// },[wishlist])

const cart = useSelector(state=>state.cartReducer)
const dispatch = useDispatch()
  return (
    <div>

<Navbar  style={{zIndex:2}} expand="lg" className="bg-primary w-100 position-fixed fw-bold">
      <Container>
        <Navbar.Brand >  <Link to={'/'} style={{textDecoration:'none', fontSize:"40px", color:'white'}}>  <i class="fa-brands fa-squarespace"></i> Cartify</Link> </Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
{insideHome&&
<Nav.Link >
   <input onChange={e=>dispatch(searchByProduct(e.target.value.toLowerCase()))}
    type="text"  className='form-control h-25' placeholder='search here...' /> 
</Nav.Link>
}

            <Nav.Link > <Link to={'/wishlist'} style={{textDecoration:'none' , color:'white'}}>Wishlist <Badge  className="bg-light rounded" ><i class="fa-solid fa-lg fa-heart me-1 text-danger"></i>{wishlist?.length}</Badge> </Link> </Nav.Link>
            <Nav.Link > <Link to={'/cart'}style={{textDecoration:'none', color:'white'}}>Cart <Badge className="bg-light rounded" ><i class="fa-solid fa-lg fa-cart-shopping me-2 text-success"></i>{cart?.length}</Badge> </Link> </Nav.Link>
   </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header