import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
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
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>I am the page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
