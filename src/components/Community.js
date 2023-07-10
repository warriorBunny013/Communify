import React from 'react';
import Home from './Home.js';
import FilterNav from './FilterNav';
import Card from './Card';
import Groups from './Groups';
import data from '../data.js';
import { useState } from 'react';
const Community = () => {

    const [item,setItem]=useState(data);
  
  const filterItem=(categItem)=>{
    const updatedItems=data.filter((curElem)=>{
      return curElem.category===categItem;
    });
    setItem(updatedItems);
  }

  // const elements=getLocalItems() || '';

//   const renderedElements=elements.map((element)=>{
//     return<div>
//          <Card image={`https://picsum.photos/seed/${~~(Math.random()*999)}/1300/400`} type="content" category={element.category} heading={element.heading} paragraph={element.paragraph} profile="profile4.png" name="uditi das" views="2.4k"/>
//       </div>
// });
    return (
        <div>
      <Home/>
      <FilterNav filterItem={filterItem} setItem={setItem}/>
      <div className='d-flex align-items-end justify-content-around border-bottom'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-12 col-md-8'>
            {item.map((data,key)=>{
              return <Card key={key} image={data.image} type={data.type} category={data.category} heading={data.heading} paragraph={data.paragraph} profile={data.profile} name={data.name} date={data.date} place={data.place} views={data.views}/>
            })}
             {/* {renderedElements} */}
          </div>
          <div className='col-4 col-md-4' >
            <Groups/>
            </div>
        </div>
       
    </div>
    </div>
    );
}

export default Community;
