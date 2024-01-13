import React from 'react'
import { Button} from 'react-bootstrap';

function Footer() {
  return (

    
    <div  className='bg-primary text-light '  style={{ padding: '20px ', textAlign: 'center' }}>
   <div>
   <h3 className='fw-bold mb-4 text-light'>  <i class="fa-brands fa-squarespace"></i> Cartify </h3>
   </div>

   <h5>About Us</h5>
   <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate doloremque commodi perspiciatis necessitatibus fugiat vitae consequatur, nam aliquid velit voluptates aperiam odio repellendus reprehenderit optio blanditiis, eligendi esse veritatis accusantium.</p>
    
    <div>
 



<div className="d-flex  flex-column align-items-center justify-content-center">
<h5 >
  Contact US</h5>
  <input className='form-control my-2 text-center'   placeholder='Enter your email address' />
  <Button className='bg-warning text-light'>Send</Button>

</div>
      <p className='my-4'>2024ReactProject ©Aswin.A
        <p>
      <i class="fa-brands fa-twitter me-2"></i>
      <i class="fa-brands fa-github me-2"></i>
      <i class="fa-brands fa-reddit me-2"></i>
      </p>
        <p>
      <span style={{  textDecoration: 'none', marginLeft: '10px', marginRight: '10px' }}>
        Terms of Service
      </span>
      <span style={{  textDecoration: 'none', marginLeft: '10px', marginRight: '10px' }}>
        Privacy Policy
      </span>
      <span style={{  textDecoration: 'none', marginLeft: '10px', marginRight: '10px' }}>
        Contact Us
      </span>
      </p>
    </p>

    </div>
    </div>

);
};


export default Footer