import './fportfolioL.scss';

export default function FportfolioL({ id, title, active, setSelected }) {
  return (
    <li className={active ?'portfolioList active' : 'portfolioList'} onClick={()=>setSelected (id)}>
        {title}
    </li>
  )
}

 