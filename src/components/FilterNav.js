import React, { useState } from 'react';
import Modal from './Modal';
import data from '../data';
const FilterNav = ({filterItem,setItem}) => {
    const [isOpen,setIsOpen]=useState(false);
    // const [isOpens,setIsOpens]=useState(false);
   
    return (
        <>
        <div className='d-none d-xl-flex d-md-flex container d-flex justify-content-center flex-column'>
        <div className='d-flex align-items-end justify-content-around border-bottom'>
            <div className='d-flex flex-wrap align-items-end gap-2 h-100 ' style={{listStyle:"none", boxSizing:"border-box"}}>
                <button className='btn text-center mt-auto font-weight-bold py-3' style={{width:"8rem",cursor:"pointer"}} onClick={()=>setItem(data)}>All post(32)</button>
                <div className='btn text-center font-weight-bold py-3'style={{width:"8rem",cursor:"pointer"}} onClick={()=>{filterItem('✍️ Article')}}>Article</div>
                <div className='btn text-center font-weight-bold py-3' style={{width:"8rem",cursor:"pointer"}} onClick={()=>filterItem('🗓️ Meetup')}>Event</div>
                <div className='btn text-center font-weight-bold py-3'style={{width:"8rem",cursor:"pointer"}} onClick={()=>filterItem('🔬 Education')}>Education</div>
                <div className='btn text-center font-weight-bold py-3'style={{width:"8rem",cursor:"pointer"}} onClick={()=>filterItem('💼️ Job')}>Job</div>
                </div>
            <div className='d-flex gap-2 h-100 mr-5' style={{listStyle:"none", boxSizing:"border-box"}}>
            <div className='text-center  font-weight-bold' ><button type="button"  onClick={() => setIsOpen(true)} className="mt-3 mb-2 btn btn-light text-nowrap border border-dark">Write a post</button>
            </div>
            <div className='text-center  font-weight-bold ' ><button type="button" className="mt-3 text-nowrap mb-2 btn btn-primary"><img src='group.png' alt='group'/> Join Group</button></div>
            </div>
        </div>
        
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        
       
        </div>
         
        <div className='flex-wrap d-xl-none d-lg-none d-md-none d-flex container justify-content-center w-100 flex-column'>
       <h3 className='mb-5 fw-bold mt-4'>Posts(368)</h3>
        <div className='flex-wrap dropdown d-flex align-items-end justify-content-around border-bottom'>
        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
            <div aria-labelledby="dropdownMenu2" className='flex-wrap dropdown-menu d-flex align-items-end' style={{listStyle:"none", boxSizing:"border-box"}}>
                <button className='dropdown-item ' style={{width:"8rem",cursor:"pointer"}} onClick={()=>setItem(data)}>All post(32)</button>
                <button className='dropdown-item' style={{width:"8rem",cursor:"pointer"}} onClick={()=>{filterItem('✍️ Article')}}>Article</button>
                <button className='dropdown-item' style={{width:"8rem",cursor:"pointer"}} onClick={()=>filterItem('🗓️ Meetup')}>Event</button>
                <button className=' dropdown-item'style={{width:"8rem",cursor:"pointer"}} onClick={()=>filterItem('🔬 Education')}>Education</button>
                <button className='dropdown-item' style={{width:"8rem",cursor:"pointer"}} onClick={()=>filterItem('💼️ Job')}>Job</button>
                </div>
           
        </div>
        
    
       
        </div>
        </>
    );
}

export default FilterNav;
