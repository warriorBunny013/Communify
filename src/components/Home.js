import React, { useEffect } from 'react';
import { useState } from 'react';
import ImageSlide from '../SlideshowData';
const Home = () => {
    const [currentState,setCurrentState]=useState(0);
   useEffect(()=>{
   const timer=setTimeout(()=>{
      if(currentState===2){
        setCurrentState(0)
      }else{
        setCurrentState(currentState+1)
      }
      return ()=>clearTimeout(timer)
   },3000)
   },[currentState])
    return (
            <div className=' d-flex' style={{height:"60vh",width:"100%",background:"cover", backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.45)), url(${ImageSlide[currentState].url})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                {/* <img className='w-100'  alt="computer" src="computer.png"/> */}
        
                <div style={{position:"relative"}} className='container ps-5 pb-5 align-self-end'>
                {/* <button className='d-xl-none d-lg-none d-md-none d-flex text-center mt-3 mb-2 btn text-nowrap border border-2'  style={{position:"absolute",top:-240,right:20,zIndex:34505,background:"transparent",color:"white"}} >+ Join Group</button> */}
                <h1 className='fs-2 text-white font-bold '>{ImageSlide[currentState].title}</h1>
                <p className='' style={{color:"rgba(255, 255, 255, 0.8)"}}>{ImageSlide[currentState].follow}</p>
                </div>
               
            </div>
            
        
    );
}

export default Home;
