import './App.css'
import RecipeList from "./Recipe";
import Countries from "./Countries";
import Movies from "./Movies";
import { movies } from "./data-movies";

export default function App() {
  return (
    <>
      {/* <RecipeList /> */}
      <Countries />
      {/* <Movies movies={movies}/> */}
    </>
  )
}