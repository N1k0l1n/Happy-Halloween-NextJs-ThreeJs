import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;
  background-image: url(./b1.jpg);
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

const Header = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  z-index: 9;

  width: 100%;
  font-size: 4rem;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }

  h1 {
    font-size: inherit;
  }
  span {
    background: linear-gradient(orange, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const BodyModel = styled.div`
  position: absolute;
  inset: 0;

  height: 100%;
  width: 100%;

  cursor: pointer;
  background-color: transparent;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 5rem;
  z-index: 9;

  width: 100%;
`;

export { Container, Header, BodyModel, Footer };