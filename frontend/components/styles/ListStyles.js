import styled from 'styled-components';

export const ListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export const ListItem = styled.div`
  background: var(--orangeShade);
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: none;
    object-position: 50% 50%;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--lightGrey);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGrey);
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export const ListTitle = styled.h3`
  margin: 0 1rem;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: white;
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: var(--orange);
    padding: 0 1rem;
  }
`;
