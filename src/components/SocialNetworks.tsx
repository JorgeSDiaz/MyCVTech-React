import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


export const SocialNetwork = () => {
  return (
    <div style={{ alignItems: 'center' }}>
      <hr style={{ borderTop: '1px solid white', width: '100%', marginBottom: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "#1663e9" }} />
        <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: "#e10909" }} />
        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#c200b2" }} />
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "#00478a" }} />
      </div>
    </div>
  );
}
