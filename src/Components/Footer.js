
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faImdb, faTiktok } from "@fortawesome/free-brands-svg-icons";

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="socials">
                <FontAwesomeIcon icon={faFacebook} size= "2x"/>
                <FontAwesomeIcon icon={faInstagram} size= "2x"/>
                <FontAwesomeIcon icon={faTwitter} size= "2x"/>
                <FontAwesomeIcon icon={faImdb} size= "2x"/>
                <FontAwesomeIcon icon={faTiktok} size= "2x"/>

            </div>
            <div><p>Copyright &copy; 2022 EdgeLedger</p></div>
        </footer>
    )
}

export default FooterComponent