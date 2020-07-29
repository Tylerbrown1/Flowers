import React from "react";
import styled from "styled-components";
import { Flower } from "@styled-icons/ionicons-outline/Flower";

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

const FlowerIcon = styled(Flower)`
  width: 2rem;
  font-size: 1.2rem;
  color: pink;
  margin: 2.4rem 0;
`;

const FlowerInfo = styled.div`
  text-align: center;
`;
const FlowerDescrip = styled.div`
  margin-bottom: 3rem;
`;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: 2.4rem;
`;

const Buttons = styled.a`
  font-size: 1.5rem;
  color: pink;
  position: relative;
  transition: color 0.5s;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%transition;
    height: 2px;
    background-color: pink;
    transition: background-color 0.5s;
  }
  &:hover,
  :focus {
    color: white;
  }
`;

function Ourstory() {
  return (
    <section>
      <Container>
        <FlowerInfo>
          <FlowerDescrip>
            <GlobalHeadline>
              <SubHeadline>
                <FirstLetter>D</FirstLetter>iscover
              </SubHeadline>
              <Headline>Our Story</Headline>
              <FlowerIcon />
            </GlobalHeadline>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              fugit tempore enim nesciunt optio eveniet labore, nihil
              voluptatibus quaerat rerum. Officiis, et repudiandae aliquid
              quisquam exercitationem similique odio dignissimos ducimus.
            </Description>
            <Buttons href="#">About Us</Buttons>
          </FlowerDescrip>
          <div className="flower-info-img">
            <img src="/roma.jpg" alt="" />
          </div>
        </FlowerInfo>
      </Container>
    </section>
  );
}

export default Ourstory;
