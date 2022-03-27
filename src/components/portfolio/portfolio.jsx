
import { useEffect, useState } from 'react';
import FportfolioL from '../fportfolioL/fportfolioL';
import './portfolio.scss';
import { featurePortfolio,webPortfolio, mobilePortfolio, designPortfolio,contentPortfolio} from '../../data';



export default function Portfolio() {

  const [ selected, setSelected]= useState('featured');
  const [ data, setData]= useState([]);

  const list =[
    {
      id:'featured',
      title:'Featured',
    },
    {
      id: 'web',
      title:'Web App',
    },
    {
      id:'design',
      title:'Design',
    },
    {
      id:'mobile',
      title:'Mobile',
    },
    {
      id :'content',
      title:'content',
    },
  ];

    useEffect(()=>{
        switch(selected){
            case 'featured':
              setData(featurePortfolio);
              break
              case 'web':
              setData(webPortfolio);
              break
              case 'mobile':
              setData(mobilePortfolio);
              break
              case 'design':
              setData(designPortfolio);
              break
              case 'content':
              setData(contentPortfolio);
              break 
              default:
                setData(featurePortfolio); 
               

        }

    },[selected])






  return (
    <div className='portfolio' id='portfolio'>
        <h1> Portfolio </h1>
        <ul>
            {list.map(item=>(
                <FportfolioL title={item.title} active= {selected===item.id} setSelected ={setSelected}
                id={item.id}
                />
            ))}

        </ul>
        <div className='container'>
           {data.map(d=>(


           
            <div className='item'>
                <img src={d.imagem} alt=''/>
                  <h3> {d.title} </h3>
            </div>

            ))}
        </div>
    </div>
  );
}

 
 