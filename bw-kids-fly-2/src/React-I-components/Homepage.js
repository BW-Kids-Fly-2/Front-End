import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Homepage() {
  return (
    <div className="homepage">
      <Container>
        <h1>KidsFly</h1>

        <nav className="user-cp">
          <Link to="/">Home</Link>
          <Link to="/parent-signin">Parent Sign In</Link>
          <Link to="/parent-registration">Parent Sign Up</Link>
          <Link to="/kfc-register"> KFC Sign Up</Link>
          <Link to="kfc-signin">KFC Login</Link>
        </nav>
      </Container>
    </div>
  );
}

export default Homepage;

const Container = styled.header`
  width: 100%;
  height: 5rem;
  background: #d1ffd6;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  /* navigation / user cp styling */
  nav.user-cp {
    display: flex;
    justify-content: flex-end;
    width: 75%;
    margin-right: 15%;
    letter-spacing: 0.1rem;

    @media (max-width: 660px) {
      width: 100%;
      justify-content: center;
    }

    a {
      color: black;
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 300ms;
      padding: 0 3rem;

      &:hover {
        transition: color 300ms;
        color: #000;
      }

      &:last-child {
        padding-right: 0;
      }

      @media (max-width: 660px) {
        &:first-child {
          padding-left: 0;
        }
      }
    }
  }

  /* more user control panel styling */
  .user-cp {
    span {
      color: #444444;
      text-decoration: none;
      font-size: 1.4rem;
      transition: all 300ms;
      padding: 0 3rem;

      &:hover {
        transition: color 300ms;
        color: #000;
        cursor: pointer;
      }
    }
  }

  h1 {
    color: #444444;
    font-weight: 600;
    font-size: 2rem;
    margin-left: 15%;
    width: 25%;

    @media (max-width: 480px) {
      display: none;
    }
  }
`;
