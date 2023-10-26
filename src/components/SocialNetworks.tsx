import React from 'react';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

interface SNProps {
  socials: string[];
}

export const SocialNetwork: React.FC<SNProps> = ({ socials }) => {
  return (
    <div>
      {socials.includes('twitter') && <Button icon="pi pi-twitter" />}
      {socials.includes('facebook') && <Button icon="pi pi-facebook" />}
      {socials.includes('instagram') && <Button icon="pi pi-instagram" />}
      {socials.includes('linkedin') && <FontAwesomeIcon icon={faLinkedin} size="lg" />}
      {socials.includes('youtube') && <FontAwesomeIcon icon={faYoutube} size="lg" />}
    </div>
  );
};
