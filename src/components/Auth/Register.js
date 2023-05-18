import React from 'react';

const Register = ({setOpen}) => {
    return (<div className='' style={{ backgroundColor: "rgba(0,0,0,0.5)", position: "fixed",height: "100%", width: "100%", top: 0,left: 0, display: "flex" ,alignItems: "center",justifyContent: "center",overflow: "auto",zIndex: 99999}}>
    <div style={{marginTop:"4rem"}} className=" card mb-3 w-50 rounded" >
    <div className='text-center p-3'style={{position:"relative",color:"rgba(0, 138, 69, 1)",backgroundColor:"#EFFFF4"}}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼<button onClick={() => setOpen(false)} className='rounded-circle border fw-bold text-grey border-dark' style={{ width:"1.8rem",height:"1.8rem", position:"absolute",top:-30,right:-20}}>X</button></div>
    <div className='container'>
        <div className='row'>
            
          <div className='col-md-6 p-3'>
          <h4 className='fw-bold' style={{fontSize:"1.9rem"}}>Create Account</h4>
            <div className="d-flex mt-4">
            <input type="text" className="bg-light text-grey  w-50 border p-2" placeholder="First name"/>
            <input type="text" className="bg-light text-grey w-50 border p-2" placeholder="Last name"/>
            </div>
            <div className="d-flex">
             <input type="text" className="bg-light text-grey  w-100 border p-2" placeholder="email"/>
            </div>
            <div className="d-flex">
             <input type="password" className="bg-light text-grey  w-100 border p-2" placeholder="password"/>
            </div>
            <div className="d-flex">
             <input type="password" className="bg-light text-grey  w-100 border p-2" placeholder="confirm password"/>
            </div>
            <button className='btn btn-primary p-2 rounded-pill mt-4 w-100 text-white fw-bold'>Create account</button>
            <button className='btn btn-light border shadow-sm p-2 rounded mt-4  flex-nowrap text-nowrap fw-bold'> <img alt='fb' src='fb.png'/> &nbsp; Sign up with Facebook</button>
            <button className='btn mb-5 btn-light border shadow-sm p-2 rounded mt-4 fw-bold flex-nowrap text-nowrap'><img alt="google" src='search.png'/>&nbsp; Sign up with Google</button>
          
          </div>
          <div className='col-md-6'>
            <div className='d-flex flex-column'>
            <p className='mt-5 ms-5'>Already have an account?<span className='fw-bold text-primary'> Sign In</span></p>
            <img src='formimage.png' alt="formimage"/>
            </div>
            
            <p className='mb-5' style={{fontSize:"0.8rem",color:"rgba(0, 0, 0, 0.5)",fontWeight:"500"}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
          </div>
        </div>
    </div>
</div>
</div>
    );
}

export default Register;
