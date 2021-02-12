import React , {useState} from "react";
import './App.css';
import NavigationBar from './component/NavigationBar';
import SideBar from "./component/SideBar";
// import ModalCart from "./component/ModalCart";
import Caroussel from "./component/Caroussel";
import { moviesData } from "./component/data";
import MovieList from "./component/MovieList";
import ModalCart from "./component/ModalCart";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
const [movies,setMovies] = useState(moviesData);
const AddMovie = (newMovie)=> {
 setMovies([...movies, newMovie]);
};
  return (
    <div className="App">
      <NavigationBar />
      <SideBar />
      <Caroussel />
      <MovieList movies={movies}/>
      <ModalCart AddMovie={AddMovie}/>
    </div>
  );
}

export default App;
