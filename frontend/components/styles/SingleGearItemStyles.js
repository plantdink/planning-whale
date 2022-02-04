import styled from 'styled-components';

const SingleGearItemStyles = styled.div`
  /* display: grid; */
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 1rem;
  img {
    width: 100%;
    object-fit: contain;
  }
  .single-gear-item__heading {
    margin: 0 1rem;
    margin-top: -3rem;
    transform: skew(7deg);
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    background: var(--highEndGold);
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    color: white;
    padding: 0 1rem;
  }
  .single-gear-item__subheading {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 0.5rem 1rem 0;
    line-height: 2;
  }
  p {
    margin: 0.75rem 0;
    font-weight: 300;
    padding: 0 1rem;
    font-size: 1.3rem;
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

export default SingleGearItemStyles;
