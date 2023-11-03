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
    <div className={`bg-${color} flex w-screen p-6`} style={{ justifyContent: 'space-between' }}>
      <SocialNetwork />
      <ContactMe gmail={"servicioalcliente@cvtech.com"} whatsapp={"+57 3142888389"} />
      <InterestingLinks links={links} />
    </div>
  );
};