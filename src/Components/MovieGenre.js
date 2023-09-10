import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";
import moment from "moment/moment";

function MovieGenre() {
    const { genre } = useParams()
    const { genreType, matches } = useContext(GlobalContext)
    const [genreMovies, setGenreMovies] = useState([])
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9fd66d9e18c945f965d9d1a26f32c9a1&with_genres=${genre}`)
            const result = await response.json()
            if (result) {
                setGenreMovies(result.results)
            }
        })
            ()

    }, [genre])
    return (
        <div>
            {genreMovies === undefined ?
                <Spinner animation="border" role="status" />
                :
                <div id="movies" className="bottom-border-list">
                    <Container><h2 className="trending-header">Popular {genreType} movies</h2></Container>
                    <Container className="movieList">
                        {
                            genreMovies && genreMovies.length > 0 ?
                                genreMovies.map((movie) => (
                                    <div key={movie.id} className={matches? "movie":"movie-mobile"}>
                                        <Link to={`/details/${movie.id}/movie`}>
                                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" />
                                            <Container>
                                                <p className="title">{movie.title}</p>
                                                <p>Release date: <span className="date">{moment(movie.release_date).format("MMM Do YYYY")}</span></p>
                                            </Container>
                                        </Link>
                                    </div>
                                ))
                                : <Spinner animation="border" role="status" />
                        }
                    </Container>
                </div >
            }
        </div >

    )
}
export default MovieGenre