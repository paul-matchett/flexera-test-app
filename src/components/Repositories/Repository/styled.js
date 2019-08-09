import styled from 'styled-components';

export const ListItem = styled.div`
    background-color: ${props => props.theme.colours.teal};
    margin-bottom: 20px;
    position: relative;
    width: 100%;
`;

export const ListItemContainer = styled.div`
  padding: 20px;
  display: flex;
`;

export const ListItemLogo = styled.img`
  margin: 0px;
  width: 100px;
  height: 100px;
`;

export const ListItemMain = styled.div`
  padding: 0 20px;
  display: block;
`;

export const ListItemTitle = styled.h2`
  margin: 0 0 6px 0;
`;

export const ListItemDescription = styled.p`
  margin: 0;
`;

export const ListItemFlag = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 30px;
  color: transparent;
  border: 4px solid ${props => props.theme.colours.green};
  transition: all 300ms;
  cursor: pointer;

  &::before,
  ::after {
    content: "";
    position: absolute;
    background-color: ${props => props.theme.colours.white};
    width: 20px;
    height: 4px;
    left: calc(50% - 10px);
    top: calc(50% - 2px);
  }

  &.plus {
    background-color: ${props => props.theme.colours.green};
  }
  
  &.plus::after {
    transform: rotate(90deg);
  }
  
  &.minus::after {
    background-color: ${props => props.theme.colours.green};
    transform: none;
  }
`;