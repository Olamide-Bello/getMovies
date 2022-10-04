import FooterComponent from "../Components/Footer"
import Genre from "../Components/MovieGenre"
import Header from "../Components/Header"
import Container from "react-bootstrap/esm/Container"

function MovieGenrePage() {

    return (
        <Container id='home' fluid className="App">
            <div className='content'>
                <Header />
                <Genre />
            </div>
            <FooterComponent />
        </Container>
    )
}
export default MovieGenrePage