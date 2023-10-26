import React from 'react';
import { SocialNetwork } from './SocialNetworks';

interface FooterProps {
  color: string;
  contact: string[]; 
  links: string[];
}

export const Footer : React.FC<FooterProps> = ({color,contact,links}) =>{

  return <div className={`bg-${color} flex`}>
    <SocialNetwork socials={'linkedin','youtube','instagram','facebook'}></SocialNetwork>
    

  </div>;

}
