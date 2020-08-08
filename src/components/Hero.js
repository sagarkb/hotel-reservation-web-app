import React from "react";

const Hero = ({ children, hero }) => {
  return <div className={hero}>{children}</div>;
};

export default Hero;

Hero.defaultProps = {
  hero: "defaultHero",
};
