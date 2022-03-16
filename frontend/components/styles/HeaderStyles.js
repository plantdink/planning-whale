import styled from 'styled-components';

export const Logo = styled.h1`
  font-size: 4rem;
  /* margin-left: 2rem; */
  position: relative;
  z-index: 2;
  background: #ff6d10;
  transform: skew(7deg);
  a {
    color: var(--text);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

export const HeaderStyles = styled.header`
  .bar {
    padding-inline: 2rem;
    border-bottom: 10px solid var(--black, black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap, 1rem);
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;
