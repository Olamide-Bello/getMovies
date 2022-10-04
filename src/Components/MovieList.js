import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Spinner from 'react-bootstrap/Spinner';
import { GlobalContext } from "./GlobalContext";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import '../App.css'

function MovieList() {
    const { loading, movieList, handleDetails, matches } = useContext(GlobalContext)
    return (
        <div>
            {loading ?
                <Spinner animation="border" role="status" />

                :
                <div className="bottom-border-list">
                    <Container>
                        <h2 className="trending-header">Result&nbsp; &mdash; &nbsp; {movieList.length}</h2>
                        <div className="movieList">
                            {
                                movieList && movieList.length > 0 ?
                                    movieList.map((movie) => (
                                        <div key={movie.imdbID} className={matches? "movie":"movie-mobile"}>
                                            <Link to={`/details/${movie.id}/${movie.media_type}`} onClick={handleDetails}>
                                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie Poster" />
                                            <Container>
                                            <p className="title">{movie.title || movie.name}</p>
                                            <p>{movie.media_type === "tv"?<span>First air date:</span>:<span>Release date:</span> }<span className="date">{moment(movie.release_date || movie.first_air_date).format("MMM Do YYYY")}</span></p>
                                            </Container>
                                            </Link>
                                        </div>
                                    ))
                                    : <p>Search not found!</p>
                            }
                        </div>
                    </Container>
                </div>
            }
        </div>
    )
}
export default MovieList