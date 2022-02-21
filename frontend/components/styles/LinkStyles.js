import styled from 'styled-components';

export const LinkStyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: var(--maxWidth);
  background: white;
  border: 1px solid var(--offWhite);
  margin-bottom: 2rem;

  img {
    justify-self: end;
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  .standard-item {
    background: var(--highEndGold);
  }

  .named-item {
    background: var(--namedGold);
  }

  .gearset-item {
    background: var(--gearsetGreen);
  }

  .exotic-item {
    background: var(--exoticOrange);
  }
`;

export const TitleLink = styled.h3`
  align-self: center;
  margin: 0 1rem;
  transform: skew(5deg);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: var(--orange);
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
`;
