import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  max-width: 122.5rem;
  margin: 0 auto;
  padding: 0 2.4rem;
`;

function Hero() {
  return (
    <section id="hero">
      <Container>
        <h2>
          <span>W</span>elcome
        </h2>
        <h1>Petras Flowers</h1>
        <div className="Headline">
          <div className="seperator">
            <div className="line-left"></div>
            <div>
              <FontAwesomeIcon icon={faAsterisk} />
            </div>
            <div className="line-right"></div>
          </div>
          <div className="animation">
            <h5>Ready to be opened</h5>
            <a href="#"></a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
