import "./App.css";
import PokemonFive from "./components/PokemonFive";
import PokemonFooterPage from "./components/PokemonFooterPage";
import PokemonFour from "./components/PokemonFour";
import PokemonHomePage from "./components/PokemonHomePage";
import PokemonOne from "./components/PokemonOne";
import PokemonThree from "./components/PokemonThree";
import PokemonTwo from "./components/PokemonTwo";

function App() {
  return (
    <div>
      <PokemonHomePage />
      <PokemonOne />
      <PokemonTwo />
      <PokemonThree />
      <PokemonFour />
      <PokemonFive />
      {/* <PokemonFooterPage /> */}
    </div>
  );
}

export default App;
