import { Parallax } from "react-parallax";
import "./PokemonOne.css";
import music_on from "../images/pixel-speaker-on.png";

const PokemonThree = () => {
  return (
    <div id="pkm-3">
      <Parallax
        className="pokemonThree"
        bgImage={
          "https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/1.svg"
        }
        strength={500}
      >
        <div className="write-up pokemonThree-title">
          <h3>Bulbasaur</h3>
          <div className="poke-info">
            <div className="individual-info pokemonThree-info">
              <h5>Evolves to &nbsp;:</h5>
              <div className="answer">Ivysaur</div>
            </div>
            <div className="individual-info pokemonThree-info">
              <h5>Weakness &nbsp;:</h5>
              <div className="answer">Psychic, Fire, Flying, Ice</div>
            </div>
            <div className="individual-info pokemonThree-info">
              <h5>Type &nbsp;:</h5>
              <div className="answer">Grass, Poison</div>
            </div>
            <div className="individual-info pokemonThree-info">
              <h5>Ability &nbsp;:</h5>
              <div className="answer">Overgrow</div>
            </div>
            <div className="pokemon-mini">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png"
                alt="mini_image"
              />
            </div>

            <div className="music">
              <img src={music_on} alt="music" />
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default PokemonThree;
