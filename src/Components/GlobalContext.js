import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({
    searchParam: "",
    handleChange: () => { },
    handleGenre: () => { },
    handleDetails: () => { },
    loading: false,
    movieList: [],
    trendingMovies: [],
    trendingSeries: [],
    upComingMovies: [],
    genreType: "",
    MovieId: "",
    genreMovies: [],

})
function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState("")
    const [movieList, setMovieList] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingSeries, setTrendingSeries] = useState([])
    const [loading, setLoading] = useState(false)
    const [genreType, setGenreType] = useState("")
    const [upComingMovies, setUpcomingMovies] = useState([])
    const [movieId, setMovieId] = useState("")
  
    const handleChange = (e) => {
        setSearchParam(e.target.value)
    }
    const handleGenre = (event) => {
        setGenreType(event.target.name)
    }
    const handleDetails = (e) => {
        setMovieId(e.target.value)
    }
    
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=9fd66d9e18c945f965d9d1a26f32c9a1")
            const result = await response.json()
            if (result) {
                setTrendingMovies(result.results)
            }

        })
            ()
    }, [])
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=9fd66d9e18c945f965d9d1a26f32c9a1")
            const result = await response.json()
            if (result) {
                setTrendingSeries(result.results)
            }
        })
            ()
    }, [])
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9fd66d9e18c945f965d9d1a26f32c9a1&language=en-US&page=1")
            const result = await response.json()
            if (result) {
                setUpcomingMovies(result.results)
            }
        })
        ()
    }, [])
    useEffect(() => {
        (async () => {
            setLoading(true)
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=9fd66d9e18c945f965d9d1a26f32c9a1&language=en-US&query=${searchParam}&page=1&include_adult=true`)
            const result = await response.json()

            if (result) {
                setMovieList(result.results)
                setLoading(false)
            }
        })
            ()

    }, [searchParam])


    const contextValue = {
        searchParam,
        handleChange,
        handleGenre,
        handleDetails,
        loading,
        movieList,
        trendingMovies,
        trendingSeries,
        upComingMovies,
        genreType,
        movieId,
    }
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState