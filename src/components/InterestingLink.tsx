import React from 'react';

interface ILProps {
  links: string[];
}


export const InterestingLinks: React.FC<ILProps> = ({ links }) => {
  return (
    <div style={{ alignItems: 'center' }}>
      <hr style={{ borderTop: '1px solid white', width: '100%', marginBottom: '20px' }} />
      <h2 className="text-2xl font-roboto font-black text-white text-center">Enlaces de Interes</h2>
      {links.map((link, index) =>
        <p className="text-base font-roboto text-white text-center" key={index}>{link}</p>
      )}
    </div>
  );
};