import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Spinner from 'react-bootstrap/Spinner';
import { GlobalContext } from "./GlobalContext";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import '../App.css'

function TrendingMovies() {
    const { trendingMovies, handleDetails, matches } = useContext(GlobalContext)
    return (
        <div>
            {trendingMovies === undefined ?
                <Spinner animation="border" role="status" />
                :
                <div id="movies" className="bottom-border-list">
                    <Container><h2 className="trending-header">Trending Movies &nbsp; &mdash; &nbsp; Top {trendingMovies.length}</h2></Container>
                    <Container className="movieList">
                        {
                            trendingMovies && trendingMovies.length > 0 ?
                                trendingMovies.map((movie, index) => (

                                    <div key={movie.id} className={matches? "movie":"movie-mobile"} >
                                        <Link to={`/details/${movie.id}/${movie.media_type}`} onClick={handleDetails}>
                                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie Poster" />
                                            <Container>
                                                <p className="title">{movie.title}</p>
                                                <p>Release date: <span className="date">{moment(movie.release_date).format("MMM Do YYYY")}</span></p>
                                                <h2>#{index + 1}</h2>
                                            </Container>
                                        </Link>
                                    </div>

                                ))
                                : <Spinner animation="border" role="status" />
                        }
                    </Container>
                </div>



            }
        </div>
    )
}
export default TrendingMovies