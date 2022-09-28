import React, {  useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import Container from "react-bootstrap/esm/Container";
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";
import moment from "moment/moment";
import '../App.css'

function SimilarMovies({similarMovies, media_type}) {
    const { handleDetails } = useContext(GlobalContext)

    return (
        <div>
            {similarMovies === undefined ?
                <Spinner animation="border" role="status" />
                :
                <div id="movies" className="bottom-border-list">
                    <Container><h2 className="trending-header">Similar {media_type === "tv"? <span>Tv Series</span>:<span>Movies</span>}</h2></Container>
                    <Container className="movieList">
                        {
                            similarMovies && similarMovies.length > 0 ?
                                similarMovies.map((movie) => (

                                    <div key={movie.id} className="movie" >
                                        <Link to={`/details/${movie.id}/${movie.media_type}`} onClick={handleDetails}>
                                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie Poster" />
                                            <Container>
                                                <p className="title">{movie.title || movie.name}</p>
                                                <p>{movie.media_type === "tv"?<span>First air date:</span>:<span>Release date:</span> }<span className="date">{moment(movie.release_date || movie.first_air_date).format("MMM Do YYYY")}</span></p>
                                            </Container>
                                        </Link>
                                    </div>

                                ))
                                : 
                                <p>No similar movies available</p>
                        }
                    </Container>
                </div>



            }
        </div>
    )
}
export default SimilarMovies