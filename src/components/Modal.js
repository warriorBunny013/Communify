import React, { useState,useEffect } from 'react';
// import data from '../data.js'


const getLocalItems=()=>{
  let elements=localStorage.getItem('elements');
  console.log(elements)

  if(elements){
    return JSON.parse(localStorage.getItem('elements'));
  }else{
    return [];
  }
}

const Modal = ({setIsOpen}) => {
  const [heading,setHeading]=useState('');
  const [cat,setCat]=useState('');
  const [text,setText]=useState('');
  const [elements,setElements]=useState(getLocalItems());
  const ele=[{
    category:`${cat}`,
    heading:`${heading}`,
    paragraph:`${text}`,
}
]
const handleClick=()=>{
  // const updateElements=[...heading,...cat,...text,newElement];
  // let updateElements=`[{category:${cat},heading:${heading},paragraph:${text}}]`

  setElements(ele);

}
useEffect(()=>{
  localStorage.setItem('elements',JSON.stringify(elements))
 },[elements])
 
//  const renderedElements=elements.map((element)=>{
//          return<div>
//               <Card image={`https://picsum.photos/seed/${~~(Math.random()*999)}/1300/400`} type="content" category={element.category} heading={element.heading} paragraph={element.paragraph} profile="profile4.png" name="uditi das" views="2.4k"/>
//            </div>
//   });
    return (<>
        <div style={{backgroundColor:"rgba(222, 226, 230, 1)",maxWidth:"50rem"}} className='m-4 border border-dark  px-4 py-3 rounded  d-flex flex-column'>
            <div className="form-group">
            <div className="form-group">
                {/* <label for="exampleFormControlSelect1">select Category</label> */}
                <select value={cat} onChange={(e)=>setCat(e.target.value)} className=" mb-3 border-dark  form-control" id="exampleFormControlSelect1">
                <option>✍️ Article</option>
                <option>🔬 Education</option>
                </select>
        </div>
            
            <div className="input-group mb-3 ">
              <input name='heading' value={heading} onChange={(e)=>setHeading(e.target.value)} type="text" className="border border-dark  form-control" placeholder='Heading...'/>
            </div>
            <textarea name='text' value={text} onChange={(e)=>setText(e.target.value)} style={{height:"10rem"}} className="border border-dark  form-control" placeholder='write down your thoughts..'></textarea>
          </div>
          <div className='d-flex gap-3'>
          <button onClick={handleClick} className='btn border fw-bold text-white bg-success mt-3'>
                submit
        </button>
        <button className='btn border fw-bold text-white bg-primary mt-3' onClick={() => setIsOpen(false)}>
                Cancel
        </button>
          </div>
          
        </div>
        
        {/* <div className='d-flex flex-column align-items-end justify-content-center border-bottom'>

        <div className='row no-gutters'>
          <div className='col-12 col-sm-12 col-md-8'>
          {renderedElements}
          </div>
          <div className='col-4 col-md-4' >
            </div>
        </div>
       </div> */}
        </>
    );
}

export default Modal;
