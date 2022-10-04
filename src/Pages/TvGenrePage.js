import FooterComponent from "../Components/Footer"
import Header from "../Components/Header"
import Container from "react-bootstrap/esm/Container"
import TvGenre from "../Components/TvGenre"


function TvGenrePage() {

    return (
        <Container id='home' fluid className="App">
            <div className='content'>
                <Header />
                <TvGenre />
            </div>
            <FooterComponent />
        </Container>
    )
}
export default TvGenrePage