import FooterComponent from "../Components/Footer"
import Genre from "../Components/MovieGenre"
import Header from "../Components/Header"
import Container from "react-bootstrap/esm/Container"


function MovieGenrePage() {

    return (
        <Container id='home' fluid className="App">
            <Header/>
            <Genre />
            <FooterComponent/>
        </Container>
    )
}
export default MovieGenrePage