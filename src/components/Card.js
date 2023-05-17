import React from 'react';

const Card = ({image,type,category,heading,paragraph,profile,name,date,place,views}) => {
    return (<div className=''>
         <div className="mt-4 card mb-3 w-100" >
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span class="badge text-black border bg-light">{category}</span>
    <h5 className="card-title mt-2 w-75">{heading}</h5>
    {(type!=="content")?<div className="">
        <div className='d-flex gap-4'>
          <div><p style={{fontWeight:"500"}}>{date}</p></div>
          <div><p style={{fontWeight:"500"}}>{place}</p></div>
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
       <div className='mx-2'>
        <p className='my-2'>{views} views</p>
       </div>
    </div>
    </div>
</div>
    </div>
   
    );
}

export default Card;
