import styled from "styled-components";

export const Header = styled.header`
  display: block;
  background-color: ${props => props.theme.colours.black};
  width: 100%;
  text-align: center;
  padding: 10px 0;
`;

export const HeaderTitle = styled.h1`
  color: white;
  margin: 0;
`;

export const Main = styled.div`
  display: block;
  padding: 40px 0;
  width: 80%;
  margin: 0 auto;
  min-height: 1000px;
`;

export const Footer = styled.footer`
  background-color: ${props => props.theme.colours.black};
  width; 100%;
  height: 60px;
`;