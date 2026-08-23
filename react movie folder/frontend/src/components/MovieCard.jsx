import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";

// maine yaha par ek card banaya hai , jiske madad se main bahut sarre cards banana sakta hu 
// is props  bolte hai html me jaha par image lagana tha waha par curly bracket me 
function MovieCard({ movie }){
    const {isFavorite,addToFavorites,removeFromFavorites} =useMovieContext()

    const favorite=isFavorite(movie.id)
    function onFavoriteClick(e){
       e.preventDefault()
       if(favorite) removeFromFavorites(movie.id) 
        else addToFavorites(movie)
    }
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="movie-overlay">
                    <button
                        className={`favorite-btn ${favorite ? "active" : ""}`}
                        onClick={onFavoriteClick}
                        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                        aria-pressed={favorite}
                    >
                        {favorite ? "❤️" : "🤍"}
                    </button>
                </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                     <p>{movie.release_date?.split("-")[0]} </p>
                </div>
            </div>
       
    )
}
// ab isko export kare gedusre file main
// agar ham yaha par export nahi lekhete tho hame function of moviecard ke pahle export likna padhta or import me {}me MovieCard ko lekhna padtha
export default MovieCard;

// CONDITIONAL RENDERING ==> when you can essentially render one component or the other based on some kind of confition