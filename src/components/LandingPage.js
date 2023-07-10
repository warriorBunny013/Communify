import React from 'react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return (
        <div className="px-5">
        <div className='w-100 min-vh-100 d-flex flex-wrap justify-content-center p-3'>
            <div className='d-flex flex-column justify-content-center w-50 p-2'>
                <div className=''>
                <h1 className='mb-5 fw-bold'>Connecting professionals, sharing knowledge, inspiring growth</h1>
            <p className='opacity-75 mb-4 fs-5'>Our social media platform is designed for professionals to connect, share valuable articles, educational content, and engage in meaningful discussions. Unlock your potential, expand your network, and stay up-to-date with industry trends on our dynamic platform.
            </p>
                </div>
                <div className='d-flex gap-3'>
                <a href="#groups" type="button" className="btn btn-primary btn-lg fs-5 px-5 py-2 rounded-pill">Get started &rarr;</a>
                <button type="button" className="btn btn-outline-primary btn-lg fs-5 px-5 py-2 rounded-pill">watch video</button>
                {/* <button type="button" class="btn btn-primary btn-lg rounded-pill">Primary</button> */}
                </div>
            
            </div>
            <div>
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_osdxlbqq.json"  background="transparent"  speed="1"  style={{width: "700px", height: "700px"}}  loop  autoplay></lottie-player>
            </div>
       
        </div>
        <div id="groups" className='w-100 min-vh-100 d-flex flex-column flex-wrap  p-3 '>
            <h1 className='d-flex fs-3 my-5'>Browse Tech Groups</h1>
            <div className='d-flex'>
            <div className="card-deck d-flex flex-column gap-4">
  <div className="card">
    <div className='d-flex'>
    <img className="card-img-top w-50" src="connectivity.png" alt="Cardcap"/>
    <div className="card-body">
      <h5 className="card-title fs-4 fw-bold">Ethical hacking</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <Link to="/community" className="btn btn-outline-primary fs-6">View group</Link>
       
    </div>
             
    </div>
  </div>
  <div className="card">
    <div className='d-flex'>
    <img className="card-img-top w-50" src="computer.png" alt="Cardcap"/>
    <div className="card-body">
      <h5 className="card-title fs-4 fw-bold">Computer Science</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <Link to="/community" className="btn btn-outline-primary fs-6">View group</Link>
    </div>
             
    </div>
  </div>
  <div className="card">
    <div className='d-flex'>
    <img className="card-img-top w-50" src="tech.png" alt="Cardcap"/>
    <div className="card-body">
      <h5 className="card-title fs-4 fw-bold">Web development</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <Link to="/community" className="btn btn-outline-primary fs-6">View group</Link>
    </div>
             
    </div>
  </div>
            </div>
            {/* <div className=''>Filter</div> */}
            </div>
            


        </div>
        </div>
    );
}

export default LandingPage;
