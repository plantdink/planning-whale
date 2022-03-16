import styled from 'styled-components';

const SingleWeaponStyles = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  max-width: var(--maxWidth);
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 2rem;
  margin-bottom: 3rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;

  .single-weapon__content {
    display: grid;
    grid-auto-columns: 1fr 3fr;
    grid-auto-flow: column;
    max-width: var(--maxWidth);
    justify-content: center;
    align-items: top;
    gap: 2rem;
    background: white;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .single-weapon__details {
  }

  .single-weapon__title-bar {
    transform: skew(7deg);
    margin-bottom: 1rem;
  }

  .single-weapon__heading {
    margin: 0 1rem;
    margin-top: -3rem;
    background: var(--orange);
    display: inline;
    line-height: 1.3;
    font-size: clamp(2rem, 5vw, 4rem);
    color: var(--text);
    /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
    padding: 0 1rem;
  }

  .single-weapon__subheading {
    margin: 0 1rem;
    /* margin-top: 0rem; */
    background: var(--orange);
    display: inline;
    line-height: 2;
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: 600;
    color: var(--text);
    /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
    padding: 0 1rem;
  }

  p {
    color: var(--text);
    margin: 0.75rem 0;
    font-weight: 400;
    padding: 0 2.4rem;
    font-size: 1.6rem;
  }

  blockquote {
    color: var(--text);
    margin: 0.85rem 0;
    padding: 0 2.4rem;
    font-weight: 300;
    font-size: 1.6rem;
  }

  small {
    color: var(--text);
    font-size: 1.2rem;
    padding: 0 2.4rem;
  }

  .named-weapon {
    background: var(--namedGold);
  }

  .exotic-weapon {
    background: var(--exoticOrange);
  }

  @media (max-width: 35em) {
    .single-weapon__content {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default SingleWeaponStyles;
