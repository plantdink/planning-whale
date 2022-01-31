import styled from 'styled-components';

export const PaginationContainerStyles = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 2rem auto;
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightGrey);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;
