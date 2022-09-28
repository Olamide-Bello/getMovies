import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Spinner from 'react-bootstrap/Spinner';
import { GlobalContext } from "./GlobalContext";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import '../App.css'

function UpcomingMovies() {
    const { upComingMovies, handleDetails } = useContext(GlobalContext)
    console.log(upComingMovies)
    return (
        <div>
            {upComingMovies === undefined ?
                <Spinner animation="border" role="status" />
                :
                <div id="movies" className="alt_bg">
                    <Container><h2 className="upcoming-header">Upcoming Movies &nbsp; &mdash; &nbsp; Top {upComingMovies.length}</h2></Container>
                    <Container className="movieList rowList">
                        {
                            upComingMovies && upComingMovies.length > 0 ?
                                upComingMovies.map((movie) => (

                                    <div key={movie.id} className="movie" >
                                        <Link to={`/details/${movie.id}/${movie.media_type}`} onClick={handleDetails}>
                                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie Poster" />
                                            <Container>
                                                <p className="title">{movie.title}</p>
                                                <p>Release Date: <span className="date">{moment(movie.release_date || movie.first_air_date).format("MMM Do YYYY")}</span></p>
                                            </Container>
                                        </Link>
                                    </div>

                                ))
                                : <p>No upcoming movies</p>
                        }
                    </Container>
                </div>



            }
        </div>
    )
}
export default UpcomingMovies