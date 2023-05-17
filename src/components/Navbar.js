import React from 'react';
import '../App.css'
import Register from './Auth/Register';
import RegisterSmall from './Auth/RegisterSmall';
import { useState } from 'react';
const Navbar = () => {
    const [open,setOpen]=useState(false);
    const [opens,setOpens]=useState(false);
    return (<><div style={{position:"relative"}}>
        <nav className="d-none d-xl-flex d-md-flex navbar navbar-light bg-white  border d-flex justify-content-around" style={{position:"sticky",top:'0',width:"100%",zIndex:"100"}}>
            <img src='logo.png' alt='logo' className='navbar-brand'/>
            {/* <ion-icon name="search"></ion-icon> */}
            <input style={{backgroundColor:"rgba(242,242,242,1)"}} className="form-control w-25 px-3 border-dark  me-2 rounded-pill" type="search" placeholder="Search for your favorite groups in ATG"/>
            <div>
            <button type="button"  onClick={() => setOpen(true)} className="mt-3 mb-2 btn btn-light">Create free account</button>
             </div>
       </nav>
       {open && <Register setOpen={setOpen} />}
    </div>
    <div style={{position:"relative"}}>
        <nav className="flex-wrap d-xl-none d-lg-none d-md-none d-flex border-0 rounded-circle w-25 border d-flex justify-content-around" style={{position:"absolute",top:'0',width:"100%",zIndex:"100"}}>
           <div style={{position:"absolute"}}>
            <button type="button"  onClick={() => setOpens(true)} className="mt-3 mb-2 btn" style={{background:"transparent",color:"white"}} >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
</button>
             </div>
       </nav>
       {opens && <RegisterSmall setOpens={setOpens} />}
    </div>
    </>
    );
}

export default Navbar;

