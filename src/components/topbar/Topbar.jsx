import './topbar.scss';
import {Person,Mail} from '@material-ui/icons';



export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar '+(menuOpen && 'active')}> 

        <div className='wrapper'>

          <di className='left'>
                  <a href='#intro'className='logo' > *Benilde* </a>
                  <div className='itemContainer'>
                    <Person className='icon'/>
                    <span> +239 984 6376</span>
                  </div>

 
                  <div className='itemContainer'>
                    <Mail className='icon'/>
                    <span> benildeconceicaobonfim@gmail.com</span>
                  </div>

          </di>
          
          <div className='right'> 
          
          <div className='hamburger'onClick={()=>setMenuOpen(!menuOpen)} > 
          
          <span className='line1'></span>    
          <span className='line2'></span>  
          <span className='line3'></span>  


          </div>  

          </div>
      
        </div>

    </div>
  );
}

