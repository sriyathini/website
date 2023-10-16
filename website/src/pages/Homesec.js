import React from "react"; 
import {  IoMdContacts } from 'react-icons/io';
function Homesec(){
    return(
      
        <div id='home' className='img-fluid top-fix'>
        <div className="container">
         <div class="fade-in-up-element">
          <div className='row ps-5'>
            <h1>Leading Big Data Analytics Company</h1>
             <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</h3>
                  <button class="fade-in-up-element">GET STARTED</button>
           </div>
           <div className='row ps-5' >
             <div className='analyze col col-lg-4 col-md-6 col-12 ps-5'>
                 <h1 className="ps-3">Analyze your Data</h1>
                 <h3 className="ps-3">Lorem ipsum dolor sit amet elit,adipising,sed do eiusmod tempor incididunt ut labore dolore magna aaliqua</h3>
             </div>
             <div className='customized col col-lg-4 col-md-6 col-12 ms-5 ps-5'>
               <h1 className="ps-3">Customized Plan</h1>
               <h3 className="ps-3">Lorem ipsum dolor sit amet elit,adipiscing,sed do eiusmod tempor incididunt ut labore dolor magna aliqua.</h3>
           </div>
           <div className='implement col col-lg-4 col-md-6 col-12 ms-5 ps-5'>
               <h1 className="ps-3"><IoMdContacts/>Implement Solution</h1>
                   <h3 className="ps-3">Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</h3>
           </div>
         </div>    
       </div> 
       </div>  
      </div>
   );
}
export default Homesec; 