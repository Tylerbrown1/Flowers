import React from "react";

import styled from "styled-components";

const BackgroundSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/perfect3.jpg) center no-repeat;
  background-size: cover;
  min-height: 65vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 122.5rem;
  margin: 0 auto;
  padding: 0 2.4rem;
`;
const SubHeadline = styled.h2`
  font-size: 8.5rem;
  font-family: var(--secondary-font);
  color: pink;
  font-weight: 100;
  line-height: 0.4;
  letter-spacing: 0.01px;
`;

const FirstLetter = styled.span`
  text-transform: uppercase;
  font-size: 10.3rem;
`;

const Headline = styled.h1`
  color: #228b22;
  font-size: 3.7rem;
  font-family: var(--main-font);
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.7rem;
  margin-right: -0.7rem;
  opacity: 50%;
`;
const GlobalHeadline = styled.div`
  text-align: center;
  margin-top: 10.8rem;
`;

function Perfectflowers() {
  return (
    <BackgroundSection>
      <Container>
        <GlobalHeadline>
          <div className="animated-top">
            <SubHeadline>
              <FirstLetter>T</FirstLetter>hePerfect
            </SubHeadline>
          </div>
          <div className="animate-bottom">
            <Headline>Flowers</Headline>
          </div>
        </GlobalHeadline>
      </Container>
    </BackgroundSection>
  );
}

export default Perfectflowers;
