import { Parallax } from "react-parallax";
import "./PokemonOne.css";
import music_on from "../images/pixel-speaker-on.png";

const PokemonFive = () => {
  return (
    <div id="pkm-5">
      <Parallax
        className="pokemonFive"
        bgImage={
          "https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/150.svg"
        }
        strength={500}
      >
        <div className="write-up pokemonFive-title">
          <h3>Mewtwo</h3>
          <div className="poke-info">
            <div className="individual-info pokemonFive-info">
              <h5>Evolves to &nbsp;:</h5>
              <div className="answer">~</div>
            </div>
            <div className="individual-info pokemonFive-info">
              <h5>Weakness &nbsp;:</h5>
              <div className="answer">Dark, Bug, Ghost</div>
            </div>
            <div className="individual-info pokemonFive-info">
              <h5>Type &nbsp;:</h5>
              <div className="answer">Psychic</div>
            </div>
            <div className="individual-info pokemonFive-info">
              <h5>Ability &nbsp;:</h5>
              <div className="answer">Pressure</div>
            </div>
            <div className="pokemon-mini">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png"
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

export default PokemonFive;
