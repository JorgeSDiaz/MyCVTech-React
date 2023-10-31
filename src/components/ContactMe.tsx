import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface ContactMeProps {
  gmail: string;
  whatsapp: string;
}

export const ContactMe: React.FC<ContactMeProps> = ({ gmail, whatsapp }) => {
  return (
    <div style={{ alignItems: 'center' }}>
      <br></br>
      <br></br>
      <h2 className="text-3xl font-roboto font-black text-white text-center">Contacto</h2>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ color: "#ff0000" }} />
        <p className="text-base font-roboto text-white text-center" style={{ marginLeft: '1rem' }}>{gmail}</p>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{ color: "#2ff109" }} />
        <p className="text-base font-roboto text-white text-center" style={{ marginLeft: '1rem' }}>{whatsapp}</p>
      </div>
    </div>
  );
};
