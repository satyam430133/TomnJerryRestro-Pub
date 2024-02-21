import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
      <div style={{width:"300px"}}>
        <h3> TOM N JERRY </h3> <p style={{fontSize:"20px"}}> Restro, Pub and Bar </p>
        <p> Dolor church-key veniam, fap Bushwick mumblecore irure Vice consectetur 3 wolf moon sapiente literally quinoa. </p>
        <ul style={{marginLeft:"-30px"}} className='footsocialmedia'> 
          <li> <i class="fa-brands fa-facebook"></i> </li>
          <li> <i class="fa-brands fa-instagram"></i> </li> 
          <li> <i class="fa-brands fa-whatsapp"></i> </li> 
          <li> <i class="fa-brands fa-twitter"></i> </li> 
          <li> <i class="fa-brands fa-youtube"></i> </li> 
        </ul>
      </div>
      <div>
        <ul> 
          <h5> OVERVIEW </h5>
          <li> Home </li>
          <li> Food Menu </li>
          <li> Online Delivery </li>
          <li> About Us </li>
          <li> Blog Posts </li>
        </ul>
      </div>
      <div>
        <ul>
          <h5> RESOURCES </h5>
          <li> Help Center </li>
          <li> Terms of use </li>
          <li> Privacy Policy </li>
        </ul>
      </div>
      <div>
        <ul>
          <h5> CONTACT ME </h5>
          <li> +6264263949 </li>       
          <li> satyambadal48@gmail.com </li>       
          <li> Maps </li>       
        </ul>
      </div>
      <div> 
        <ul>
         <h5> LOCATION </h5>
         <li> Bhopal, Madhya Pradesh </li>
        </ul>
      </div>
    </footer>
    </>
  )
}

export default Footer;