import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/esm/Container";
import YouTube from "react-youtube";
import moment from "moment/moment";
import SimilarMovies from "./SimilarMovies";
import RecommendedMovies from "./RecommendedMovies";
import { GlobalContext } from "./GlobalContext";



function MovieDetails() {
    const { matches } = useContext(GlobalContext)
    const { id, media_type } = useParams()
    const [similarMovies, setSimilarMovies] = useState([])
    const [recommendedMovies, setRecommendedMovies] = useState([])
    const [movieDetails, setMovieDetails] = useState([])
    const [tvDetails, setTvDetails] = useState([])
    const [tvTrailerKey, setTvTrailerKey] = useState("")
    const [movieTrailerKey, setMovieTrailerKey] = useState("")

 
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9fd66d9e18c945f965d9d1a26f32c9a1&append_to_response=videos`)
            const result = await response.json()
            if (result.id) {
                setMovieDetails([result])
            }
            if (result.videos) {
                const officialTrailer = result.videos.results.find(
                    video => video.name.includes("Official Trailer") || video.name.includes("Trailer")
                )
                setMovieTrailerKey(officialTrailer.key)

            }
            
        })
        ()
    }, [id])
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=9fd66d9e18c945f965d9d1a26f32c9a1&append_to_response=videos`)
            const result = await response.json()
            if (result.id ) {
                setTvDetails([result])
            }
            if (result.videos) {
                const officialTrailer = result.videos.results.find(
                    video => video.name.includes("Official Trailer") || video.name.includes("Trailer")
                )
                setTvTrailerKey(officialTrailer.key)

            }
            
        })
        ()
    }, [id])

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=9fd66d9e18c945f965d9d1a26f32c9a1&language=en-US&page=1`)
            const result = await response.json()
            if (result) {
                setSimilarMovies(result.results)
            }
            if (result.success === false){
                setSimilarMovies([])
            }
        })
        ()
    }, [id])
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=9fd66d9e18c945f965d9d1a26f32c9a1&language=en-US&page=1`)
            const result = await response.json()
            if (result) {
                setSimilarMovies(result.results)
            }
            if (result.success === false){
                setSimilarMovies([])
            }
            
        })
        ()
    }, [id])
    console.log(similarMovies)
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=9fd66d9e18c945f965d9d1a26f32c9a1&language=en-US&page=1`)
            const result = await response.json()
            if (result) {
                setRecommendedMovies(result.results)
            }
            if (result.success === false){
                setRecommendedMovies([])
            }

            
        })
        ()
    }, [id])
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=9fd66d9e18c945f965d9d1a26f32c9a1&language=en-US&page=1`)
            const result = await response.json()
            if (result) {
                setRecommendedMovies(result.results)
            }
            if (result.success === false){
                setRecommendedMovies([])
            }

            
        })
        ()
    }, [id])
    console.log(recommendedMovies)





    return (
        <div>
            {media_type === "tv" 
            &&
            <>
                {tvDetails.length>0 && tvDetails.map((movie) => (
                    <div key={movie.id}>
                        <div className="poster-background" style={{ background: `url(https://image.tmdb.org/t/p/w200${movie.poster_path}) no-repeat center center/cover` }}>
                            <img className="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" />
                        </div>
                        <div>
                            <Container>
                                <h2 className="title">{movie.title || movie.name}</h2>
                                <p>{movie.overview}</p>
                                <p><span><strong>Genre:</strong></span> {movie.genres.map((each, index) => {return <span key={index}>{index ? ', ' : ''}{each.name}</span> })}</p>
                                <p><strong>Number of Seasons:</strong> {movie.number_of_seasons}</p>
                                <p><strong>First air date:</strong> <span className="date">{moment(movie.release_date || movie.first_air_date).format("MMM Do YYYY")}</span></p>
                                <p><strong>Language:</strong> {movie.spoken_languages.map((language, index) => <span key={index}>{index ? ', ' : ''}{language.name}</span>)}</p>
                                <p><strong>Rating:</strong> {movie.vote_average}</p>
                            </Container>
                        </div>
                        <div className="iframe">
                            <YouTube videoId={tvTrailerKey} iframeClassName={matches? "frame":"frame-mobile"} />
                        </div>
                    </div>)
                )}
            </>
            }
            {media_type === "movie"
            &&
            <>
                {movieDetails.length > 0 && movieDetails.map((movie) => (
                    <div key={movie.id}>
                        <div className="poster-background" style={{ background: `url(https://image.tmdb.org/t/p/w200${movie.poster_path}) no-repeat center center/cover` }}>
                            <img className="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" />
                        </div>
                        <div>
                            <Container>
                                <h2 className="title">{movie.title || movie.name}</h2>
                                <p>{movie.overview}</p>
                                <p><span><strong>Genre:</strong></span> {movie.genres.map((each, index) => {return <span key={index}>{index ? ', ' : ''}{each.name}</span> })}</p>
                                <p><strong>Release Date:</strong> <span className="date">{moment(movie.release_date || movie.first_air_date).format("MMMM Do YYYY")}</span></p>
                                <p><strong>Language:</strong> {movie.spoken_languages.map((language, index) => <span key={index}>{index ? ', ' : ''}{language.name}</span>)}</p>
                                <p><strong>Rating:</strong> {movie.vote_average}</p>
                            </Container>
                        </div>
                        <div className="iframe">
                            <YouTube videoId={movieTrailerKey} iframeClassName={matches? "frame":"frame-mobile"} />
                        </div>
                    </div>)
                )}
            </>
            }
            {media_type === undefined
            &&
            <>
                {movieDetails.length > 0 && movieDetails.map((movie) => (
                    <div key={movie.id}>
                        <div className="poster-background" style={{ background: `url(https://image.tmdb.org/t/p/w200${movie.poster_path}) no-repeat center center/cover` }}>
                            <img className="poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Movie Poster" />
                        </div>
                        <div>
                            <Container>
                                <h2 className="title">{movie.title || movie.name}</h2>
                                <p>{movie.overview}</p>
                                <p><span><strong>Genre:</strong></span> {movie.genres.map((each, index) => {return <span key={index}>{index ? ', ' : ''}{each.name}</span> })}</p>
                                <p><strong>Release Date:</strong> <span className="date">{moment(movie.release_date || movie.first_air_date).format("MMMM Do YYYY")}</span></p>
                                <p><strong>Language:</strong> {movie.spoken_languages.map((language, index) => <span key={index}>{index ? ', ' : ''}{language.name}</span>)}</p>
                                <p><strong>Rating:</strong> {movie.vote_average}</p>
                            </Container>
                        </div>
                        <div className="iframe">
                            <YouTube videoId={movieTrailerKey} iframeClassName={matches? "frame":"frame-mobile"} />
                        </div>
                    </div>)
                )}
            </>
            }
            <SimilarMovies similarMovies={similarMovies} media_type= {media_type}/>
            <RecommendedMovies recommendedMovies={recommendedMovies} />


        </div>
    )
}
export default MovieDetails