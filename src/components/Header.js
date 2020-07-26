import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

//CSS Styling
const HeaderAppBar = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
`;

const Container = styled.div`
  width: 100%;
  max-width: 122.5rem;
  margin: 0 auto;
  padding: 0 2.4rem;
`;

const Nav = styled.nav`
  height: 7.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    opacity: 0;
    transform: scale(0);
  }
`;

const MenuToggle = styled.div`
  color: #fff;
  font-size: 2.2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 2.5rem;
  cursor: pointer;
  z-index: 1500;
`;

const NavList = styled.ul`
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
  background-color: var(--main-font-color-dark);
  padding: 4.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1250;
  /* transform: translateX(-100%); */
  transition: transform 0.5s;
`;

function Header() {
  return (
    <HeaderAppBar>
      <Container>
        <Nav>
          <MenuToggle>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon style={{ display: "none" }} icon={faTimes} />
          </MenuToggle>
          <a href="/">
            <img src="/lilly.png" alt="" />
          </a>
          <NavList>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Flowers">Flowers</a>
            </li>
            <li>
              <a href="/Reservations">Reservations</a>
            </li>
            <li>
              <a href="/Shop">Shop</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </NavList>
        </Nav>
      </Container>
    </HeaderAppBar>
  );
}

export default Header;
