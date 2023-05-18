import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css'

const Card = ({image,type,category,heading,paragraph,profile,name,date,place,views}) => {

  const mystyle = {
    dropdownToggle:{
      '&::after': {
        display: 'none'
      }
    }
  };
    return (<div className='w-100'>
         <div className="mt-4 card mb-3 w-100" >
  <img src={image} className="w-100 card-img-top" alt="..."/>
  <div className="card-body">
  <span className="badge text-black border bg-light">{category}</span>
  <div className='d-flex justify-content-between'>
  <h5 className="card-title mt-2 w-75">{heading}</h5>
  
  <Dropdown style={mystyle}>
      <Dropdown.Toggle style={mystyle} variant="light" id="dropdown-basic">
      <img style={{height:"1.5rem"}} src='dots.png' alt='dots'/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
    
    {(type!=="content")?<div className="">
        <div className='d-flex gap-4'>
          <div><p style={{fontWeight:"500"}}><img style={{height:"1.1rem"}}  src='calender.png'alt='calender'/>&nbsp;{date}</p></div>
          <div><p style={{fontWeight:"500"}}><img style={{height:"1.1rem"}} className='mb-1'  src='location.png'alt='calender'/>&nbsp;{place}</p></div>
        </div>
        <div className="d-grid mb-4 gap-2">
            {(category==="🗓️ Meetup")?<button className="btn btn-light border " style={{color:"rgba(229, 97, 53, 1)",fontSize:"0.85rem",fontWeight:"500"}} type="button">Visit Website</button>
        :<button className="btn btn-light border" style={{color:"rgba(2, 184, 117, 1)",fontSize:"0.85rem",fontWeight:"500"}} type="button">Apply on Timesjobs</button>
    }
          </div>
       </div>
        :<p className="card-text mt-2">{paragraph}</p>
    }

    <div className="d-flex justify-content-between">
        <div className='d-flex'>
        <img
        src={profile}
        className="rounded-circle"
        alt="Avatar"
        style={{width:"3rem"}}
      />
      <p className='my-2 ms-3' style={{fontWeight:"600",fontSize:"1.2rem"}}>{name}</p>
        </div>
       <div className='d-flex gap-5 mx-2'>
        <p className='my-2'><img style={{cursor:"pointer"}} src='eye.png' alt="views"/>&nbsp; {views} views</p>
        <div><img style={{cursor:"pointer"}} src='share.png' alt='share'/></div>
       </div>
    </div>
    </div>
</div>
    </div>
   
    );
}

export default Card;
