import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  html {
    --orange: #ff6d10;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGray);
    --damageRed: #a43b3b;
    --armorBlue: #45618e;
    --skillYellow: #ffd373;
    --highEndGold: #ffaf10;
    --namedGold: #eaa213;
    --exoticOrange: #ff6f36;
    --gearsetGreen: #01ff90;
    --maxWidth: 1000px;
    --bs: 0 12px 124px 0 rgba(0, 0, 0, 0.09);
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
