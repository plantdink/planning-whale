import styled from 'styled-components';

const FooterStyles = styled.footer`
  font-size: 1.5rem;
  padding: 1rem 0;
  background-color: var(--orange);
  border-top: 10px solid var(--black, black);

  h4 {
    color: var(--text);
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .footer-content__parent {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  .footer-content__child {
    margin: 0 3rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.2rem 0;
  }

  a {
    color: var(--text);
  }

  @media (max-width: 425px) {
    .footer-content__parent {
      flex-direction: column;
    }
  }
`;

export default FooterStyles;
