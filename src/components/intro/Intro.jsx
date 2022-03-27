import './intro.scss';
import {init} from 'ityped';
import { useEffect, useRef } from 'react';




export default function Intro() {

  const textRef =useRef();

      useEffect(()=>{
        init(textRef.current, {
          showCursor:true,
          backDelay:1500,
          backSpeed:60,
          
          strings:['Engenharia', 'Informática'],
        });
      },[]);



  return (
    <div className='intro' id='intro'>
       <div className='left'>
         <di className='imgContainer'>
            <img src='assets/bea.jpg' alt=''/>
         </di>
       </div>
       <div className='right'>
         <di className='wrapper'>
           <h2>Hi There, I'm</h2>
           <h1>Benilde Bonfim</h1>
           <h3> Finalista do Curso de    <span ref={textRef} > </span></h3> 
         </di>

        <a href='#portfolio'>
          <img src='assets/b2.png' alt=''/>
        </a>

       </div>

    </div>
  )
}

