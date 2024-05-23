import { Parallax } from "react-parallax";
import "./PokemonOne.css";
import music_on from "../images/pixel-speaker-on.png";

const PokemonOne = () => {
  return (
    <div id="pkm-1">
      <Parallax
        className="pokemonOne"
        bgImage={
          "https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/39.svg"
        }
        strength={500}
      >
        <div className="write-up pokemonOne-title">
          <h3>JigglyPuff</h3>
          <div className="poke-info">
            <div className="individual-info pokemonOne-info">
              <h5>Evolves to &nbsp;:</h5>
              <div className="answer">Wigglytuff</div>
            </div>
            <div className="individual-info pokemonOne-info">
              <h5>Weakness &nbsp;:</h5>
              <div className="answer">Poison, Steel</div>
            </div>
            <div className="individual-info pokemonOne-info">
              <h5>Type &nbsp;:</h5>
              <div className="answer">Fairy, Normal</div>
            </div>
            <div className="individual-info pokemonOne-info">
              <h5>Ability &nbsp;:</h5>
              <div className="answer">Cute charm, Competitive</div>
            </div>
            <div className="pokemon-mini">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/2/22/Pok%C3%A9mon_Jigglypuff_art.png"
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

export default PokemonOne;
