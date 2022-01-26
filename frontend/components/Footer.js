import Link from 'next/link';
import styled from 'styled-components';
import SignOut from './SignOut';
import { useUser } from './User';

const FooterStyles = styled.footer`
  .footer {
    font-size: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: var(--orange);
    border-top: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    a {
      margin-left: 2rem;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
    }
  }
`;

export default function Footer() {
  const user = useUser();

  return (
    <FooterStyles>
      <div className="footer">
        {user && (
          <>
            <Link href="/">Admin Backend</Link>
            <SignOut />
          </>
        )}
        {!user && (
          <>
            <Link href="/signin">Admin Login</Link>
          </>
        )}
      </div>
    </FooterStyles>
  );
}
