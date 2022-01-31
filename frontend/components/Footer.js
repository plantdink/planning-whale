import Link from 'next/link';
import styled from 'styled-components';
import SignOut from './SignOut';
import { useUser } from './User';

const FooterStyles = styled.footer`
  .footer {
    grid-row-start: 2;
    grid-row-end: 3;
    font-size: 1rem;
    padding: 1rem;
    background-color: var(--orange);
    border-top: 10px solid var(--black, black);
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
