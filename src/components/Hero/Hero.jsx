import HeroSocials from "./HeroSocials";
import { DefaultBtn } from "../components.styles";
import blueCat from "../../assets/image/blue-cat-cut.png";
import curnIcon from "../../assets/image/curn-icon.png";
import triangleIcon from "../../assets/image/triangle-icon.png";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="hero">
      <HeroSocials />
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__title">
            <h1>Hello, I Am</h1>
            <span>
              <Typewriter
                words={["Digital Cat", "Digital Cat", "Digital Cat"]}
                loop={0}
                cursor
              />
            </span>
          </div>
          <p>Xoş gəlmisiniz, Rəqəmsal Dünyaya keçid buradan başlayır.</p>
          <div className="hero__buttons">
            <DefaultBtn>Müraciət etmək</DefaultBtn>
            <a href="#portfolio">İşlərimiz</a>
          </div>
        </div>
        <div className="hero__right">
          <img id="curn-icon" src={curnIcon} alt="" />
          <img id="blue-cat" src={blueCat} alt="" />
          <img id="triangle-icon" src={triangleIcon} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
