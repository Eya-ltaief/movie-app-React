//importing react and hooks
import React , {useState} from "react";
//importing our components
import SideBar from "./component/SideBar";
import Caroussel from "./component/Caroussel";
import NavigationBar from './component/NavigationBar';
//importing movies components
import MovieList from "./component/MovieList";
import ModalCart from "./component/ModalCart";
//importing movies data
import { moviesData } from "./component/data";
//importing css and bootstrap
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
const [movies,setMovies] = useState(moviesData);
const [title, setTitle] = useState("");
const [rate, setRate] = useState("");
const AddMovie = (newMovie)=> {
setMovies([...movies, newMovie]);
};

  return (
    <div className="App">
      <NavigationBar setTitle={setTitle} setRate={setRate}/>
      <SideBar />
      <Caroussel />
      <MovieList movies={movies} searchText={title} searchRate={rate}/>
      <ModalCart AddMovie={AddMovie}/>
    </div>
  );
}
export default App;
