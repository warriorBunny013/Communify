import React from 'react';

const Group = () => {
    return (<div className="d-flex my-3 justify-content-between">
    <div className='d-flex'>
    <img
    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
    className="rounded-circle"
    alt="Avatar"
    style={{height:"1.7rem"}}
  />
  <p className='my-2 ms-3' style={{fontWeight:"600",fontSize:"0.8rem"}}>Sardhak sharma</p>
    </div>
   <div className='mx-2'>
    <button className='btn btn-dark rounded-pill text-white' style={{fontWeight:"600",fontSize:"0.8rem"}}>Follow</button>
   </div>
           </div>
    );
}

export default Group;
