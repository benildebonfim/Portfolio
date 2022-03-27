import  "./testemunhos.scss" ;

export  default  function  Testemunhos( )  {
     const data=  [
    {
      id: 1 ,
      name : 'Tom Durden' ,
      title : 'Desenvolvedor Sênior' ,
      imagem :
        'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' ,
      icon : 'assets/twitter.png' ,
      desc :
        '*** Tome Nota ***' ,
    } ,
    {
      id: 2 ,
      name : 'Alex Kalinski' ,
      title : 'Co-Fundador da DELKA' ,
      imagem :
        'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' ,
      icon : 'assets/youtube.png' ,
      desc :
        '*** Muito bom ***' ,
      featured : true ,
    } ,
    {
      ID : 3 ,
      name : 'Martin Harold' ,
      title : 'CEO da ALBI' ,
      imagem :
        'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      icon : 'assets/linkedin.png' ,
      desc :
        '*** Deves fazer Parte ***' ,
    } , 
  ] ;
  return(

    <div className ='testimonials' id ='testimonials'>
      <h1>Testemunhos </h1>
      <div className = 'container'>
        {data.map((d)=>(
          <div className = {d.featured ? 'card featured':'card'}>
            <div  className = 'top'>
              < img  src = 'assets/right-arrow.png'  className = 'left'alt = ''/>
              < img
                className = "user"
                src = {d.img}
                alt = ''/>
              < img  className = 'right'  src = {d.icon}  alt = ''/>
            </div>
            <div className = "center">
              {d.desc}
            </div>
            <div className ='bottom'>
              <h3> {d.name} </h3>
              <h4> {d.title} </h4>
            </div>
          </div>
        ) ) }
      </div>
    </div>
  ) ;
}





 