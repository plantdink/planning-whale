import styled from 'styled-components';

const SingleGearItemStyle = styled.div`
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

  
  .title-icon-container {
    align-self: end;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-end;
    right: 40px;
    top: 18px;
    z-index: 1;
  }
  
  .single-gear-item__icon-image {
    align-self: end;
    position: absolute;
    z-index: 1;
    right: 35px;
    top: 25px;
    width: 40px;
    object-fit: contain;
  }
  
  .multiple-gear-item__icon-image {
    position: absolute;
    top: 3px;
    width: 50px;
    object-fit: contain;
  }
  
  .single-gear-item__content {
    display: flex;
  }
  
  .single-gear-item__details {
    flex: 1;
    flex-direction: column;
  }
}

.item-image {
  flex: 5;
  img {
    height: 150px;
    object-fit: contain;
  }
}

  .single-gear-item__heading {
    flex: auto;
    flex-grow: 1;
    margin: 0 1rem 1rem 0;
    transform: skew(7deg);
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    background: var(--highEndGold);
    line-height: 1.3;
    font-size: 4rem;
    color: white;
    padding: 0 1rem;
  }

  .single-gear-item__subheading {
    flex: auto;
    margin: 1rem 0 0 0;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem 1rem 0;
    line-height: 2;
  }

  .single-gear-item__sub-subheading {
    flex: auto;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.3;
  }

  ul {
    margin: 0;
    font-weight: 300;
    font-size: 1.5rem;
    list-style-type: none;
  }

  p {
    justify-self: start;
    flex: auto;
    padding: 0 1rem 0 1rem;
    margin: 0.5rem 0;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.3;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
  }

  blockquote {
    margin: 0.75rem 0;
    padding: 0 1rem;
    font-weight: 200;
    font-size: 1.5rem;
  }

  p:last-of-type {
    margin-bottom: 3rem;
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

export default SingleGearItemStyle;
