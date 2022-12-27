import React from 'react';
import play from '../images/play.svg'
import {Link} from 'react-router-dom';

const Cartsearch=({state})=>{
    return (

      
      <div className='container-fluid'>
      {
        state.map((s)=>(
          
            s.type==="song" && 
          
           <div className='row justify-content-center mt-3' key={s.position}>
               <div className='col-10'>
                <div id='divCartSearch' className='d-flex align-items-center justify-content-evenly'>
                    <img src={s.song.album.image.cover.url} alt={s.song.album.name.replace('Single' , '')}/>
                   <div>
                     <h6>
                      {s.song.album.name.replace('Single' , '')}
                     
                     </h6>
                    <p>{s.song.album.artists[0].fullName}</p>
                   </div>
                   <Link to={`details/${s.song.id}`} className='text-decoration-none'>
                     <img src={play} alt="play icon" />
                    </Link> 
                </div>

               </div>
            
        </div>
        ))
      }
      </div>
        
    
    );
}

export default Cartsearch;