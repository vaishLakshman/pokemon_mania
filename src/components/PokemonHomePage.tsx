import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import "./PokemonHomepage.css";

const PokemonHomePage = () => {
  const [goToSlide, setGoToSlide] = useState<any>(null);

  const test = (id: Number) => {
    const element = document.getElementById(`pkm-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  let cards = [
    {
      key: 1,
      content: (
        <img
          onClick={() => test(1)}
          src="https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/39.svg"
        />
      ),
    },
    {
      key: 2,
      content: (
        <img
          onClick={() => test(2)}
          src="https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/25.svg"
        />
      ),
    },
    {
      key: 3,
      content: (
        <img
          onClick={() => test(3)}
          src="https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/1.svg"
        />
      ),
    },
    {
      key: 4,
      content: (
        <img
          onClick={() => test(4)}
          src="https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/133.svg"
        />
      ),
    },
    {
      key: 5,
      content: (
        <img
          onClick={() => test(5)}
          src="https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/150.svg"
        />
      ),
    },
  ];

  const table = cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  return (
    <div className="homepage">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="pokemon logo"
        />
      </div>

      <div className="carousel">
        <Carousel
          slides={table}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={true}
          animationConfig={config.gentle}
        />
      </div>
    </div>
  );
};

export default PokemonHomePage;
