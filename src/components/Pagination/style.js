import styled from 'styled-components';

export const PaginationContainer = styled.div`
    padding: 0 0 10px 0;
    margin: 20px 0 10px 0;
`;

export const PaginationCount = styled.p`
    display: block;
    margin: 10px 0 2px 0;
`;

export const PageButton = styled.button`
  width: 30px;
  height: 30px;
  color: green;
  border: 2px solid ${props => props.theme.colours.green};
  transition: all 300ms;
  cursor: pointer;
  font-weight: ${props => props.theme.fonts.weight.bold};
  margin: 0 4px 0 0;

  &:focus {
      outline: none;
  }

  &:disabled {
    opacity: 0.8
    border-color: ${props => props.theme.colours.grey};
    color: ${props => props.theme.colours.grey};
    cursor: default;
  }

  &.active {
    color: white;
    background-color: ${props => props.theme.colours.green};
  }

  &:hover:not(.active):not(:disabled) {
    background-color: ${props => props.theme.colours.teal};
  }
`;