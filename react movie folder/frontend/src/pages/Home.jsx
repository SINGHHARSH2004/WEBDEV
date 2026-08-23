

import MovieCard from "../components/MovieCard";
// USEEFFECT ALLOWS YOUTO ADD SIDE EFFECT TO YOUR FUCTIO OR TO YOUR COPONENTAND DEFINE WHEN THEY SHOULD RUN

import { useState,useEffect} from "react";
import{searchMovies,getPopularMovies} from "../services/api";
import "../css/Home.css"; 
function Home() {
    const[searchQuery,setSearchQuery]=useState("");

    //THIS FUCTION WILL BE CALLED EVERY SINLGE TIME THAT ANYTHING IN THIS COMPONENT CHANGES
    // NOW THAT NOT IDEAL BECAUSE WE DONT WANT TO CONSTANTLY BE FETCHING MOVIES EVERY TIME WHEN REALLY THE MOVIES HAVENT CHANGED AND THERE IS NO REASON TO FECTH AGAIN 
    //LOTS OF TIME WE WANTTO DO SOMETHING MAYBE ONCE , RIGHT WHEN THIS COMPONENT IS RENDERED ON SCREEN
  //const movies =getPopularMovies()
  const[movies,setMovies]=useState([]);
  const [error,setError]=useState(null);
  const[loading,setLoading]=useState(true)


  // wecheck every single rerendered and if it changes  then we runthis use effect
  // and if there nothing here that simply means we just going to runthis one time
  useEffect(()=>{
    const loadPopularMovies=async()=>{

      try{
        const popularMovies=await getPopularMovies()
        setMovies(popularMovies)
      }catch(error){
        console.error(error)
        setError("Failed to load movies....")
      }
      finally{
        setLoading(false)
      }
    }
    loadPopularMovies()
  },[])   //dependency array
  const handleSearch = async(e) => {
    e.preventDefault();
    
    if(!searchQuery.trim())return
    if(loading)return

    setLoading(true)

    try{
        const searchResults=await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    }catch(err){
      console.log(err);
      
      setError("Failed to search movies...")
    }finally{
      setLoading(false)
    }
    setSearchQuery("");
};
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {error && <div className="error-message">{error}</div> }

      {loading ? (
        <div className="loading">Loading...</div>
      ) : movies.length === 0 ? (
        <div className="no-results">
          <h2>No movies found</h2>
          <p>Try searching for a different title.</p>
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
 