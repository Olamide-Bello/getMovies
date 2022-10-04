import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import '../App.css'
import Dropdown from "./Dropdown";


function Header() {

    return (
        <Navbar sticky="top" className="header">
            <Container>
                <Container>

                    <Navbar.Brand className="brand-name"><NavLink to="/home" className="no-hover"><strong><span className="name-color">get</span><span className="white-shade">Movies</span></strong><FontAwesomeIcon icon={faGrip} /><FontAwesomeIcon icon={faPlay} /></NavLink></Navbar.Brand>

                </Container>
                <Container className="navlinks">
                    <Dropdown />
                </Container>
            </Container>
        </Navbar>
    )

}

export default Header;
