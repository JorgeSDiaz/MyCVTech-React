import React from 'react';

interface ILProps {
  links: string[];
}


export const InterestingLinks : React.FC<ILProps> = ({links}) =>{

  return <div style={{ marginLeft: '400px',  marginRight: '50px'}}>
    <br></br>
    <br></br>
    <hr style={{ borderTop: '1px solid white', marginRight: 0, marginLeft: 'auto', marginTop: '1rem'}} />

    
    <h2 className="text-2xl font-roboto font-black text-white text-center">Enlaces de interes</h2>
    {links.map((link,index) =>
        <p className="text-base font-roboto text-white text-center" key={index} >{link}</p>
    )}
  </div>;
    


}