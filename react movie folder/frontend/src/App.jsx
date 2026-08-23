import "./css/App.css";
// yaha par ham moviecard ko import kare ge
// import MovieCard from './components/MovieCard';
import Favorites from './pages/Favorites';
import Home from './pages/home';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from "./context/MovieContext";

function App() {
 
  return (
    
    <MovieProvider>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;









 {/* {movieNumber===1?( 
    <MovieCard movie={{title:"harsh movie",release_date: "2024"}}/>
   ):(
    <MovieCard movie={{title:"jones",release_date: "2020"}}/>
   )}  */}