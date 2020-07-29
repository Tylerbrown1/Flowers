import React from "react";
import styled from "styled-components";
import { ArrowIosUpwardOutline } from "@styled-icons/evaicons-outline/ArrowIosUpwardOutline";
import { Flower } from "@styled-icons/ionicons-outline/Flower";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Pinterest } from "@styled-icons/boxicons-logos/Pinterest";

const FooterSection = styled.footer`
  padding: 7.9rem 0;
  background-color: pink;
  color: #fff;
  text-align: center;
  position: relative;
`;

const BackToTop = styled.div`
  width: 7rem;
  height: 7rem;
  background-color: pink;
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
`;

const Arrow = styled(ArrowIosUpwardOutline)`
  display: block;
  color: #fff;
  font-size: 2rem;
`;

const About = styled.h4`
  font-size: 1.9rem;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 3px;
  margin-bottom: 3rem;
`;

const FlowerIcon = styled(Flower)`
  width: 2rem;
  font-size: 1.2rem;
  color: #fff;
  margin: 2.4rem 0;
`;

const ContentAbout = styled.div`
  margin-bottom: 2.4rem;
`;

const PTag = styled.p`
  line-height: 2;
`;

const SocialIcons = styled.ul`
  list-style: none;
  margin-bottom: 2.4rem;
  display: flex;
  justify-content: center;
`;

const SoicalIconsEach = styled.li`
  font-size: 2rem;
  color: #fff;
  padding: 0.8rem 2rem;
  opacity: 0.5;
  transition: color 0.5s;
  &:hover,
  :focus {
    color: #228b22;
  }
`;

const NewsletterForm = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const NewsletterInput = styled.input`
  width: 100%;
  max-width: 25rem;
  padding: 1rem;
  border-radius: 0.4rem;
  border: none;
  ::placeholder {
    color: pink;
  }
`;

const NewsletterButton = styled.button`
  background-color: transparent;
  border: none;
  color: pink;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1px 0.6rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10.5rem;
`;

function Footer() {
  return (
    <FooterSection>
      <div className="container">
        <BackToTop>
          <a href="#hero">
            <Arrow />
          </a>
        </BackToTop>
        <div className="footer-content">
          <ContentAbout>
            <About>About Petra</About>
            <FlowerIcon />
          </ContentAbout>
          <PTag>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nisi
            accusamus incidunt? Totam illo aliquid repellendus cum, laudantium
            ratione molestiae harum cupiditate excepturi consequuntur nam a enim
            numquam quibusdam? Corrupti?
          </PTag>
        </div>
        <div className="footer-content-divider">
          <div className="social-media">
            <About style={{ paddingTop: "2.4rem" }}>Follow Us On</About>
            <SocialIcons>
              <SoicalIconsEach>
                <a href="">
                  <FacebookSquare style={{ color: "#fff", width: "3rem" }} />
                </a>
              </SoicalIconsEach>
              <SoicalIconsEach>
                <a href="">
                  <Instagram style={{ color: "#fff", width: "3rem" }} />
                </a>
              </SoicalIconsEach>
              <SoicalIconsEach>
                <a href="">
                  <LinkedinSquare style={{ color: "#fff", width: "3rem" }} />
                </a>
              </SoicalIconsEach>
              <SoicalIconsEach>
                <a href="">
                  <Pinterest style={{ color: "#fff", width: "3rem" }} />
                </a>
              </SoicalIconsEach>
            </SocialIcons>
          </div>
          <div className="news-letter">
            <About>Newsletter</About>
            <NewsletterForm action="">
              <NewsletterInput
                type="email"
                name=""
                id=""
                placeholder="Enter Email "
              />
              <NewsletterButton type="submit">Submit</NewsletterButton>
            </NewsletterForm>
          </div>
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer;
