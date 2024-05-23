import { Parallax } from "react-parallax";
import "./PokemonOne.css";
import music_on from "../images/pixel-speaker-on.png";

const PokemonTwo = () => {
  return (
    <div id="pkm-2">
      <Parallax
        className="pokemonTwo"
        bgImage={
          "https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/25.svg"
        }
        // blur={10}
        strength={500}
      >
        <div className="write-up pokemonTwo-title">
          <h3>Pikcahu</h3>
          <div className="poke-info">
            <div className="individual-info pokemonTwo-info">
              <h5>Evolves to &nbsp;:</h5>
              <div className="answer">Raichu</div>
            </div>
            <div className="individual-info pokemonTwo-info">
              <h5>Weakness &nbsp;:</h5>
              <div className="answer">Ground</div>
            </div>
            <div className="individual-info pokemonTwo-info">
              <h5>Type &nbsp;:</h5>
              <div className="answer">Electric</div>
            </div>
            <div className="individual-info pokemonTwo-info">
              <h5>Ability &nbsp;:</h5>
              <div className="answer">Static</div>
            </div>
            <div className="pokemon-mini">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png"
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

export default PokemonTwo;
