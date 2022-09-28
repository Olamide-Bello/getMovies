import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Spinner from 'react-bootstrap/Spinner';
import { GlobalContext } from "./GlobalContext";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import '../App.css'

function TrendingSeries() {
    const { trendingSeries, handleDetails } = useContext(GlobalContext)
    return (
        <div>
            {trendingSeries === undefined ?
                <Spinner animation="border" role="status" />
                :
                <div id="series" className="bottom-border-list">
                    <Container><h2 className="trending-header">Trending Series  &nbsp; &mdash; &nbsp; Top {trendingSeries.length}</h2></Container>    
                    <Container className="movieList">

                        {
                            trendingSeries && trendingSeries.length > 0 ?
                                trendingSeries.map((movie, index) => (
                                    <div key={movie.id} className="movie">
                                        <Link to={`/details/${movie.id}/${movie.media_type}`} onClick={handleDetails}>
                                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie Poster" />
                                            <Container>
                                                <p className="title">{movie.name}</p>
                                                <p>First air date: <span className="date">{moment(movie.first_air_date).format("MMM Do YYYY")}</span></p>
                                                <h2>#{index +1}</h2>
                                            </Container>
                                        </Link>
                                    </div>
                                ))
                                : <p>Loading</p>
                        }
                    </Container>
                </div>



            }
        </div>
    )
}
export default TrendingSeries