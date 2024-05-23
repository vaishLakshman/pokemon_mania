import { Parallax } from "react-parallax";
import "./PokemonOne.css";
import music_on from "../images/pixel-speaker-on.png";

const PokemonFour = () => {
  return (
    <div id="pkm-4">
      <Parallax
        className="pokemonFour"
        bgImage={
          "https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/133.svg"
        }
        strength={500}
      >
        <div className="write-up pokemonFour-title">
          <h3>Eevee</h3>
          <div className="poke-info">
            <div className="individual-info pokemonFour-info">
              <h5>Evolves to &nbsp;:</h5>
              <div className="answer">Umbreon,Sylveon</div>
            </div>
            <div className="individual-info pokemonFour-info">
              <h5>Weakness &nbsp;:</h5>
              <div className="answer">Fighting</div>
            </div>
            <div className="individual-info pokemonFour-info">
              <h5>Type &nbsp;:</h5>
              <div className="answer">Normal</div>
            </div>
            <div className="individual-info pokemonFour-info">
              <h5>Ability &nbsp;:</h5>
              <div className="answer">Adaptability,Run away</div>
            </div>
            <div className="pokemon-mini">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a9/Pok%C3%A9mon_Eevee_art.png"
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

export default PokemonFour;
