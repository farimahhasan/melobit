import React from 'react';

const Cartsearch=({name})=>{
    return (
            <div className='row justify-content-center'>
               <div className='col-10'>
                <div id='divCartSearch' className='d-flex align-items-center'>
   {/*                 <img src={} alt={}/> */}
                   <div>
                     <h6></h6>
                     <p>{name}</p>
                   </div>
                </div>

               </div>
            
        </div>
    );
}

export default Cartsearch;