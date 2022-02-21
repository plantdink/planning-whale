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
  }

  .single-weapon__heading {
    margin: 0 1rem;
    margin-top: -3rem;
    transform: skew(7deg);
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    background: var(--highEndGold);
    display: inline;
    line-height: 1.3;
    font-size: 3rem;
    color: white;
    padding: 0 1rem;
  }

  .single-weapon__subheading {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem 1rem 0;
    line-height: 2;
  }

  p {
    margin: 0.75rem 0;
    font-weight: 300;
    padding: 0 1rem;
    font-size: 1.5rem;
  }

  blockquote {
    margin: 0.75rem 0;
    padding: 0 1rem;
    font-weight: 200;
    font-size: 1.5rem;
  }

  .named-weapon {
    background: var(--namedGold);
  }

  .exotic-weapon {
    background: var(--exoticOrange);
  }
`;

export default SingleWeaponStyles;
