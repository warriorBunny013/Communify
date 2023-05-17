import React from 'react';

const Modal = ({setIsOpen}) => {
    return (
        <div style={{backgroundColor:"rgba(222, 226, 230, 1)",maxWidth:"50rem"}} className='m-4 border border-dark  px-4 py-3 rounded  d-flex flex-column'>
            <div className="form-group">
            <div className="form-group">
                {/* <label for="exampleFormControlSelect1">select Category</label> */}
                <select className=" mb-3 border-dark  form-control" id="exampleFormControlSelect1">
                <option>✍️ Article</option>
                <option>🔬 Education</option>
                </select>
        </div>
            
            <div className="input-group mb-3 ">
              <input type="text" className="border border-dark  form-control" placeholder='Heading...'/>
            </div>
            <textarea style={{height:"10rem"}} className="border border-dark  form-control" placeholder='write down your thoughts..'></textarea>
          </div>
          <div className='d-flex gap-3'>
          <button className='btn border fw-bold text-white bg-success mt-3'>
                submit
        </button>
        <button className='btn border fw-bold text-white bg-primary mt-3' onClick={() => setIsOpen(false)}>
                Cancel
        </button>
          </div>
          
        </div>
    );
}

export default Modal;
