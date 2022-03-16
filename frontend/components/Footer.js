import Link from 'next/link';
import SignOut from './SignOut';
import { useUser } from './User';
import FooterStyles from './styles/FooterStyles';

//  Support Links
const websiteFaults = 'https://github.com/plantdink/planning-whale/issues';
const contactMe = '';
const githubRepo = 'https://github.com/plantdink/planning-whale';

//  Community Site Links
const div2Builds = 'https://mxswat.github.io/mx-division-builds/#/';
const weeklyVendorReset =
  'http://rubenalamina.mx/the-division-weekly-vendor-reset/';
const subReddit = 'https://www.reddit.com/r/thedivision/';

//  Admin Links
const backend = '';
const signIn = '/signin';

export default function Footer() {
  const user = useUser();

  return (
    <FooterStyles>
      <nav className="footer-content__parent">
        <div className="footer-content__child">
          <h4>Support</h4>
          <ul>
            <li>
              <a href={websiteFaults}>Report Website Issues, Bugs</a>
            </li>
            <li>
              <a href={contactMe}>Contact the Developer</a>
            </li>
            <li>
              <a href={githubRepo}>Code Repository</a>
            </li>
          </ul>
        </div>

        <div className="footer-content__child">
          <h4>Community Sites</h4>
          <ul>
            <li>
              <a href={div2Builds}>Div2 Builds</a>
            </li>
            <li>
              <a href={weeklyVendorReset}>Weekly Vendor Reset</a>
            </li>
            <li>
              <a href={subReddit}>Division 2 SubReddit</a>
            </li>
          </ul>
        </div>

        <div className="footer-content__child">
          <h4>Admin Portal</h4>
          <ul>
            {user && (
              <>
                <li>
                  <Link href={backend}>Admin Backend</Link>
                </li>
                <li>
                  <SignOut />
                </li>
              </>
            )}
            {!user && (
              <>
                <li>
                  <Link href={signIn}>Admin Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </FooterStyles>
  );
}
