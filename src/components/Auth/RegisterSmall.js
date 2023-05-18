import React from 'react';
import { useState } from 'react';
const RegisterSmall = ({setOpens}) => {
  const [togglesm, setTogglesm] = useState(true)
    return (<div className='' style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999,height:"100vh"}}>
    <div className="mt-4 card mb-3 rounded" style={{position:"relative"}} >
    <button onClick={() => setOpens(false)} className='rounded-circle border fw-bold text-grey border-dark' style={{ width:"1.8rem",height:"1.8rem",color:"white",backgroundColor:"#212529", position:"absolute",top:0,right:22}}>X</button>
    <div className='container'>
        <div className='row'>
          <div className='col-md-6 p-3'>
          {togglesm ?<h4 className='fw-bold' style={{fontSize:"1.9rem"}}>Create Account</h4>:<h4 className='fw-bold mb-4' style={{fontSize:"1.9rem"}}>Welcome back!</h4>}
            {togglesm &&<div className="d-flex mt-4">
            <input type="text" className="bg-light text-grey  w-50 border p-2" placeholder="First name"/>
            <input type="text" className="bg-light text-grey w-50 border p-2" placeholder="Last name"/>
            </div>}
            <div className="d-flex">
             <input type="text" className="bg-light text-grey  w-100 border p-2" placeholder="email"/>
            </div>
            <div className="d-flex">
             <input type="password" className="bg-light text-grey  w-100 border p-2" placeholder="password"/>
            </div>
           {togglesm && <div className="d-flex">
             <input type="password" className="bg-light text-grey  w-100 border p-2" placeholder="confirm password"/>
            </div>}
            {togglesm ?<button className='btn btn-primary p-2 rounded-pill mt-4 w-50 text-white fw-bold'>Create account</button>:<div className='d-flex justify-content-between'><button className='btn btn-primary p-2 rounded-pill mt-4 w-50 text-white fw-bold'>Sign In</button><span className='mt-4 text-grey' style={{cursor:"pointer"}} onClick={() => setTogglesm(!togglesm)} >or, Create Account</span></div>}
            <button className='btn btn-light border shadow-sm p-2 rounded mt-4 w-100  fw-bold'> <img alt="fb" src='fb.png'/> &nbsp; Sign up with Facebook</button>
            <button className='btn mb-2 btn-light border shadow-sm p-2 rounded mt-4 w-100 fw-bold'><img alt="google" src='search.png'/> &nbsp; Sign up with Google</button>
          
          </div>
          <div className='col-md-6'>
            <div className='d-flex flex-column'>
            {togglesm &&<p className=' ms-5'>Already have an account?<span className='fw-bold text-primary' style={{cursor:"pointer"}} onClick={() => setTogglesm(!togglesm)}> Sign In</span></p>}
            </div>
            {togglesm ?<p className='mb-5' style={{fontSize:"0.8rem",color:"rgba(0, 0, 0, 0.5)",fontWeight:"500"}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>:<p className='mb-5' style={{fontSize:"0.8rem",color:"rgba(0, 0, 0, 0.5)",fontWeight:"500"}}>Forgot your password?</p>}
          </div>
        </div>
    </div>
</div>
</div>
    );
}

export default RegisterSmall;
