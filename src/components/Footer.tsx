import React from 'react';
import { SocialNetwork } from './SocialNetworks';
import { ContactMe } from './ContactMe';
import { InterestingLinks } from './InterestingLink';

interface FooterProps {
  color: string;
  links: string[];
}

export const Footer: React.FC<FooterProps> = ({ color, links }) => {
  return (
    <div className={`bg-${color} flex w-screen`} style={{ display: 'flex', justifyContent: 'space-between'}}>
      <SocialNetwork></SocialNetwork>
        <ContactMe gmail={"servicioalcliente@cvtech.com"} whatsapp={"+57 3142888389"}></ContactMe>
        <InterestingLinks links={links}></InterestingLinks>
    </div>
  );
};
