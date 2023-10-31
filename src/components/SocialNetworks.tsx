import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const SocialNetwork = () => {
  return (
    <>
    <div style={{ marginRight: '400px', marginLeft: '50px' }}>
    <br></br>
    <br></br>
    <hr style={{ borderTop: '1px solid white', width: "200px" }} />

      <h1>HOLLAAA</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      
        <FontAwesomeIcon icon={faLinkedin} size="xl" style={{ color: "#1663e9", marginLeft: '1rem' }} />
        <FontAwesomeIcon icon={faYoutube} size="xl" style={{ color: "#e10909", marginLeft: '1rem' }} />
        <FontAwesomeIcon icon={faInstagram} size='xl' style={{ color: "#c200b2", marginLeft: '1rem' }} />
        <FontAwesomeIcon icon={faFacebook} size='xl' style={{ color: "#00478a", marginLeft: '1rem' }} />
      </div>
    </div>
    </>
  );
    
};
