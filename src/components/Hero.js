import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Flower } from "@styled-icons/ionicons-outline/Flower";

const fadeUp = keyframes`
  0% {
    transform: translateY(4rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 122.5rem;
  margin: 0 auto;
  padding: 0 2.4rem;
`;

const Heros = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/background.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
`;

const SubHeadline = styled.h2`
  font-size: 8.5rem;
  font-family: var(--secondary-font);
  color: pink;
  font-weight: 100;
  line-height: 0.4;
  letter-spacing: 2px;

  @media screen and (min-width: 900px) {
    font-size: 10rem;
    animation: ${fadeUp} 0.5s forwards;
    animation-delay: 1s;
  }
`;

const FirstLetter = styled.span`
  text-transform: uppercase;
  font-size: 10.3rem;
  @media screen and (min-width: 900px) {
    font-size: 12.2rem;
  }
`;

const Headline = styled.h1`
  color: #fff;
  font-size: 3.7rem;
  font-family: var(--main-font);
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.5rem;
  margin-right: -0.5rem;

  @media screen and (min-width: 900px) {
    font-size: 4.7rem;
    letter-spacing: 0.8rem;
  }
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LineLeft = styled.div`
  width: 100%;
  max-width: 8.4rem;
  height: 0.25rem;
  background-color: #fff;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 0.6rem solid transparent;
    border-left-color: #fff;
    left: 0;
  }
  @media screen and (min-width: 900px) {
    max-width: 11.4rem;
  }
`;

const LineRight = styled.div`
  width: 100%;
  max-width: 8.4rem;
  height: 0.25rem;
  background-color: #fff;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 0.6rem solid transparent;
    border-right-color: #fff;
    right: 0;
  }
  @media screen and (min-width: 900px) {
    max-width: 11.4rem;
  }
`;
const FlowerIcon = styled(Flower)`
  width: 2rem;
  font-size: 1.2rem;
  color: pink;
  margin: 0 1.6rem;
`;

const HeadLineDescrip = styled.h5`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  letter-spacing: 3px;
  margin-right: -3px;
`;

const Buttons = styled.a`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: -2px;
  font-size: 1.1rem;
  background-color: #fff;
  padding: 0.9rem 1.8rem;
  color: pink;
  border-radius: 0.4rem;
  transition: background-color 0.5s;
  &:hover {
    color: #fff;
    background-color: pink;
  }
  &:focus {
    color: #fff;
    background-color: pink;
  }
  @media screen and (min-width: 900px) {
    background-color: pink;
    color: #fff;
    &:hover {
      background-color: white;
      color: pink;
    }
  }
`;

function Hero() {
  return (
    <Heros id="hero">
      <Container>
        <SubHeadline>
          <FirstLetter>W</FirstLetter>elcome
        </SubHeadline>
        <Headline>Petras Flowers</Headline>
        <div className="Headline">
          <Separator>
            <LineLeft></LineLeft>
            <div>
              <FlowerIcon />
            </div>
            <LineRight></LineRight>
          </Separator>
          <div className="animation">
            <HeadLineDescrip>Wedding Flower designs</HeadLineDescrip>
            <Buttons href="#">Explore</Buttons>
          </div>
        </div>
      </Container>
    </Heros>
  );
}

export default Hero;
