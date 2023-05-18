import React from 'react';
import Group from './Group';

const Groups = () => {
    return (
        <div className='d-none d-xl-flex d-md-flex flex-column ms-5  mt-4  w-75 p-3'>
            <div className='d-flex flex-column'>
                <div>
                    <input type='text' className='bg-light text-grey border-0 border-white py-1 px-2' placeholder='Enter your location'/>
                    <hr/>
                </div>
                <p className='mb-5' style={{fontSize:"0.8rem",color:"rgba(0, 0, 0, 0.5)",fontWeight:"500"}}><img style={{width:"1rem"}} className='mb-1' src='warn.png' alt='location'/>&nbsp;Your location will help us to serve better and extend a personal experience</p>
            </div>
            <p className='text-black text-capitalize'>RECCOMENDED GROUPS</p>
            <div className='d-flex flex-column'>
               <Group/>
               <Group/>
               <Group/>
            </div>
        </div>
    );
}

export default Groups;
