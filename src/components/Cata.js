import React from 'react'
import '../test_styles/Cata.css'
import img1 from '../test_images/img1.webp'
export default function Cata() {
  return (
    <>
    <div id="cat_box">
           
           <a className='cat' href="">
               <div>
                   <img src={img1} alt="img1" />
               </div>
               <p>grocery</p>
           </a>
           <a className='cat' href="">
               <div>
                   <img src={img1} alt="img1" />
               </div>
               <p>mobiles</p>
           </a>
           <a className='cat' href="">
               <div>
                   <img src={img1} alt="img1" />
               </div>
               <p>appliances</p>
           </a>

           <div className='cat' >
               <div>
                   <img src={img1} alt="img1" />
               </div>
               {/* <p>travel</p> */}
               <div class="dropdown">
                   <button
                       class="btn dropdown-toggle"
                       type="button"
                       id="dropdownMenuButton"
                       data-mdb-toggle="dropdown"
                       aria-expanded="false"
                   >
                       Fashion
                   </button>
                   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                       <li><a class="dropdown-item" href="#">Action</a></li>
                       <li><a class="dropdown-item" href="#">Another action</a></li>
                       <li><a class="dropdown-item" href="#">Something else here</a></li>
                   </ul>
               </div>
           </div>

           <div className='cat' >
               <div>
                   <img src={img1} alt="img1" />
               </div>
               {/* <p>travel</p> */}
               <div class="dropdown">
                   <button
                       class="btn dropdown-toggle"
                       type="button"
                       id="dropdownMenuButton"
                       data-mdb-toggle="dropdown"
                       aria-expanded="false"
                   >
                       Electronics
                   </button>
                   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                       <li><a class="dropdown-item" href="#">Action</a></li>
                       <li><a class="dropdown-item" href="#">Another action</a></li>
                       <li><a class="dropdown-item" href="#">Something else here</a></li>
                   </ul>
               </div>
           </div>

           <div className='cat' >
               <div>
                   <img src={img1} alt="img1" />
               </div>
               {/* <p>travel</p> */}
               <div class="dropdown">
                   <button
                       class="btn dropdown-toggle"
                       type="button"
                       id="dropdownMenuButton"
                       data-mdb-toggle="dropdown"
                       aria-expanded="false"
                   >
                       Home and funiture 
                   </button>
                   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                       <li><a class="dropdown-item" href="#">Action</a></li>
                       <li><a class="dropdown-item" href="#">Another action</a></li>
                       <li><a class="dropdown-item" href="#">Something else here</a></li>
                   </ul>
               </div>
           </div>



           <a className='cat' href="">
               <div>
                   <img src={img1} alt="img1" />
               </div>
               <p>travel</p>
           </a>

           <div className='cat' >
               <div>
                   <img src={img1} alt="img1" />
               </div>
               {/* <p>travel</p> */}
               <div class="dropdown">
                   <button
                       class="btn dropdown-toggle"
                       type="button"
                       id="dropdownMenuButton"
                       data-mdb-toggle="dropdown"
                       aria-expanded="false"
                   >
                       Beauty 
                   </button>
                   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                       <li><a class="dropdown-item" href="#">Action</a></li>
                       <li><a class="dropdown-item" href="#">Another action</a></li>
                       <li><a class="dropdown-item" href="#">Something else here</a></li>
                   </ul>
               </div>
           </div>
           <div className='cat' >
               <div>
                   <img src={img1} alt="img1" />
               </div>
               {/* <p>travel</p> */}
               <div class="dropdown">
                   <button
                       class="btn dropdown-toggle"
                       type="button"
                       id="dropdownMenuButton"
                       data-mdb-toggle="dropdown"
                       aria-expanded="false"
                   >
                       Bikes
                   </button>
                   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                       <li><a class="dropdown-item" href="#">Action</a></li>
                       <li><a class="dropdown-item" href="#">Another action</a></li>
                       <li><a class="dropdown-item" href="#">Something else here</a></li>
                   </ul>
               </div>
           </div>


       </div>
    </>
  )
}
