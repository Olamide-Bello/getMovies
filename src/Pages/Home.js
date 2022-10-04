import MovieList from '../Components/MovieList';
import Search from '../Components/Search';
import { GlobalContext } from '../Components/GlobalContext';
import TrendingMovies from '../Components/TrendingMovies';
import React, { useContext } from "react";
import TrendingSeries from '../Components/TrendingSeries';
import Header from '../Components/Header';
import Container from 'react-bootstrap/Container';
import FooterComponent from '../Components/Footer';
import UpcomingMovies from '../Components/UpcomingMovies';

function Home() {
  const { movieList } = useContext(GlobalContext)
  return (
    <Container id='home' fluid className="App">
      <div className='content'>
        <Header />
        <Search />
        {movieList ? <MovieList />
          :
          <>
            <TrendingMovies />
            <UpcomingMovies />
            <TrendingSeries />
          </>
        }
      </div>
      <FooterComponent />
    </Container>
  );
}
export default Home