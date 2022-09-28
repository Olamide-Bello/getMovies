import FooterComponent from "../Components/Footer"

import Header from "../Components/Header"
import Container from "react-bootstrap/esm/Container"
import MovieDetails from "../Components/MovieDetails"


function DetailsPage() {

    return (
        <Container id='home' fluid className="App">
            <Header/>
            <MovieDetails/>
            <FooterComponent/>
        </Container>
    )
}
export default DetailsPage