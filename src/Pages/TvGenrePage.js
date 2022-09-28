import FooterComponent from "../Components/Footer"
import Header from "../Components/Header"
import Container from "react-bootstrap/esm/Container"
import TvGenre from "../Components/TvGenre"


function TvGenrePage() {

    return (
        <Container id='home' fluid className="App">
            <Header/>
            <TvGenre/>
            <FooterComponent/>
        </Container>
    )
}
export default TvGenrePage