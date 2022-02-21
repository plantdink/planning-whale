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
`;

export const ListTitle = styled.h3`
  margin: 0 1rem;
  margin-top: -3rem;
  transform: skew(5deg);
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: var(--orange);
    display: inline;
    line-height: 1.3;
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
`;
