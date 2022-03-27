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
    justify-self: center;
    align-self: end;
    position: absolute;
    z-index: 1;
    right: 35px;
    top: 25px;
    width: clamp(2vw, 4vw, 40px);
    object-fit: contain;
  }
  
  .multiple-gear-item__icon-image {
        justify-self: center;
    align-self: end;
    position: absolute;
    z-index: 1;
    right: -3px;
    top: 4px;
    width: clamp(2vw, 6vw, 40px);
    object-fit: contain;

    /* position: absolute;
    top: 3px;
    width: 50px;
    object-fit: contain; */
  }
  
  .single-gear-item__content {
    display: flex;
  }

  .single-gear-item__sub-content {
    margin-top: 2rem;
  }
  
  .single-gear-item__details {
    flex-direction: column;
  }
}

.item-image {
  img {
    max-width: clamp(10vw, 25vw, 150px);
    object-fit: contain;
  }
}

.single-gear-item__title-bar {
  transform: skew(7deg);
  margin-top: 2rem;
}
.single-gear-item__title-bar:first-child {
  margin-top: 0rem;
}

.single-gear-item__heading {
  flex: auto;
  flex-grow: 1;
  margin: 0 0 1rem 0;
  /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
  background: var(--orange);
  line-height: 1.3;
  font-size: clamp(2rem, 5vw, 4rem);
  color: var(--text);
  padding: 0 1rem;
}

.single-gear-item__subheading {
  flex: auto;
  margin-top: 1rem;
  margin-top: -3rem;
  /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
  background: var(--orange);
  display: inline;
  line-height: 2;
  font-size: clamp(1rem, 3vw, 2rem);
  font-weight: 600;
  color: var(--text);
  padding: 0 1rem;
}

.single-gear-item__subheading:first-child {
  margin-top: 0rem;
}

.single-gear-item__h3subheading {
  margin: 0;
  margin-top: -3rem;
  /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
  background: var(--orange);
  display: inline;
  line-height: 2;
  font-size: clamp(1rem, 3vw, 1.8rem);
  font-weight: 600;
  color: var(--text);
  padding: 0 1rem;
}

.single-gear-item__sub-subheading {
  flex: auto;
  margin: 0;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.3;
}

ul {
  margin: 0;
  color: var(--text);
  font-weight: 400;
  font-size: 1.6rem;
  padding: 0;
  list-style-type: none;
}

li {
  padding: 0.5rem 0 0 1.5rem;
}

p {
  color: var(--text);
  justify-self: start;
  flex: auto;
  padding: 0 1rem 0 1rem;
  margin: 0.5rem 0;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
}

blockquote {
  color: var(--text);
  margin: 0.75rem 0;
  padding: 0 1rem;
  font-weight: 300;
  font-size: 1.6rem;
}

.standard-item {
  background: var(--orange);
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
