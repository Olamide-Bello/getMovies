import { useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";
import '../App.css'
import { GlobalContext } from './GlobalContext';

function Dropdown() {
    const {handleGenre} = useContext(GlobalContext)
    return (
        <Container fluid >

            <Nav className='dropdown'>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Discover Tv"
                    drop="down"
                    className='dropdown'
                >
                    <NavDropdown.Item as={NavLink} to={`/tv/10759`} onClick={handleGenre} name= "action & adventure" className='dropdown'>Action & Adventure</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/10766`} onClick={handleGenre} name= "soap" className='dropdown'>Soap</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/35`} onClick={handleGenre} name= "comedy" className='dropdown'>Comedy</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/80`} onClick={handleGenre} name= "crime" className='dropdown'>Crime</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/99`} onClick={handleGenre} name= "documentary" className='dropdown'>Documentary</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/10751`} onClick={handleGenre} name= "family" className='dropdown'>Family</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/27`} onClick={handleGenre} name= "horror" className='dropdown'>Horror</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/10762`} onClick={handleGenre} name= "kids" className='dropdown'>Kids</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/10402`} onClick={handleGenre} name= "musical" className='dropdown'>Musical</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/9648`} onClick={handleGenre} name= "mystery" className='dropdown'>Mystery</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/10764`} onClick={handleGenre} name= "reality" className='dropdown'>Reality</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/10765`} onClick={handleGenre} name= "science fiction & fantasy" className='dropdown'>Sci-Fi & Fantasy</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/53`} onClick={handleGenre} name= "thriller" className='dropdown'>Thriller</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/10768`} onClick={handleGenre} name= "war & politics" className='dropdown'>War & Politics</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/tv/37`} onClick={handleGenre} name= "western" className='dropdown'>Western</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to={`/tv/18`} onClick={handleGenre} name= "drama" className='dropdown'>
                        Drama
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Discover movies"
                    drop="down"
                    className='dropdown'
                >
                    <NavDropdown.Item as={NavLink} to={`/movie/28`} onClick={handleGenre} name= "action" className='dropdown'>Action</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/14`} onClick={handleGenre} name= "fantasy" className='dropdown'>Fantasy</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/12`} onClick={handleGenre} name= "adventure" className='dropdown'>Adventure</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/35`} onClick={handleGenre} name= "comedy" className='dropdown'>Comedy</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/80`} onClick={handleGenre} name= "crime" className='dropdown'>Crime</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/99`} onClick={handleGenre} name= "documentary" className='dropdown'>Documentary</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/10751`} onClick={handleGenre} name= "family" className='dropdown'>Family</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/27`} onClick={handleGenre} name= "horror" className='dropdown'>Horror</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/10402`} onClick={handleGenre} name= "musical" className='dropdown'>Musical</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/9648`} onClick={handleGenre} name= "mystery" className='dropdown'>Mystery</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/878`} onClick={handleGenre} name= "science fiction" className='dropdown'>Sci-Fi</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/53`} onClick={handleGenre} name= "thriller" className='dropdown'>Thriller</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to={`/movie/10752`} onClick={handleGenre} name= "war" className='dropdown'>War</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to={`/movie/18`} onClick={handleGenre} name= "drama" className='dropdown'>
                        Drama
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>

        </Container>
    )
}
export default Dropdown