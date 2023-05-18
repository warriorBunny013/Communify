import React from 'react';
import '../App.css'
import Register from './Auth/Register';
import RegisterSmall from './Auth/RegisterSmall';
import { useState } from 'react';
const Navbar = () => {

    // const mystyle = {
    //     input[type="search"]:{
    //       '&::placeholder': {
    //         display: 'none'
    //       }
    //     }
    //   };

    const [open,setOpen]=useState(false);
    const [opens,setOpens]=useState(false);
    return (<><div style={{position:"relative"}}>
        <nav className="d-none d-xl-flex d-md-flex navbar navbar-light bg-white  border d-flex justify-content-around" style={{position:"sticky",top:'0',width:"100%",zIndex:"100"}}>
            <img src='logo.png' alt='logo' className='navbar-brand'/>
            {/* <ion-icon name="search"></ion-icon> */}
            <input style={{backgroundColor:"rgba(242,242,242,1)", background:'transparent url("searchicon.png") no-repeat 12px'}} className="form-control w-25 px-3 border-dark  me-2 rounded-pill" type="search" placeholder="     Search for your favorite groups in ATG"/>
            <div>
            <button type="button"  onClick={() => setOpen(true)} className="mt-3 mb-2 btn btn-light">Create free account.<span className='fw-bold text-primary'>It's free!</span><img src='arrowdown.png' alt='arrowdown'/></button>
             </div>
       </nav>
       {open && <Register setOpen={setOpen} />}
    </div>
    <div className='bg-danger' style={{position:"relative"}}>
        <nav className="flex-wrap d-xl-none d-lg-none d-md-none d-flex border-0 w-100 d-flex justify-content-between" style={{position:"absolute",top:'0',width:"100%",zIndex:"100"}}>
          
            <button type="button"  onClick={() => setOpens(true)} className="mt-3 mb-2 btn" style={{background:"transparent",color:"white"}} >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
</button>
<button className='d-xl-none d-lg-none d-md-none d-flex text-center mt-3 mb-2 btn text-nowrap border border-2'  style={{background:"transparent",color:"white"}} >Join Group</button>
                
<img  src="pen.png" alt='pen' style={{position:"fixed",bottom:10, right:20,cursor:"pointer"}}/>
             
       </nav>
       {opens && <RegisterSmall setOpens={setOpens} />}
    </div>
    </>
    );
}

export default Navbar;


