

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

        {loading?(
          <div className="loading">Loading...</div>
        ):(
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


// STATE IS SOMETHING WHERE ONCE ITS UPDATED , THE COMPONENT WILL CHANGE AND RE RENDER ITSELF TO SHOW THE NEW STATE

// WHEM EVER WE ARE MAKING FORM WE ALWAYS HAVE TO CONECTED ALL THE ELEMENT OF FORM WITH PIECE OF STATE 
// SO WHEN EVER WE UPDATE THE STATE THIS COMPONENT IS GOING TO RERENDER ITSELF ON SCREEN 
// TO CONNECT THE STATE WITH COMPONENT WE PUT 
// VALUE={searchQuery}IN SIDE THE FORM


// onChange={(e) => setSearchQuery(e.target.value)}
// BEFORE THIS WE CANNOT TYPE ON SEARCH BUTTON 
// WITH THE HEPL OF THIS WE CAN TYPE ON SEARCH BUTTON AND IT WILL UPDATE THE STATE AND RERENDER THE COMPONENT

        //   movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />

        //   CONITONAL RENDERING ==> IT ONLY RENDER THE MOVIE CARD IF THE TITLE OF MOVIE STARTS WITH SEARCH QUERY OTHERWISE IT WILL NOT RENDER ANYTHING

// we are creating the form for searching the movie

{/* <MovieCard movie={movie} key={movie.id} />
IT IS A COMPONENT WHICH IS TAKING THE MOVIE AS A PROP AND RENDERING THE MOVIE CARD ON SCREEN */}
// .map() used to render the array of value dynamically
// we use .map() fuction which is going iterate over all value inside . of our right for every single value it going to take it and pass it to this function 
// and this function need to return some jsx code

// when ever you do this ,you to need to add .key() property to the component you return 

// because react need to kenown which component to update based on the interaction that happen with the  web page 
// so we need to mark every single one of these components with a unique identifier,so react can handel all of the state updates that it typically does 