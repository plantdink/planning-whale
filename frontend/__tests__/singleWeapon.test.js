import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import SingleWeapon from '../components/SingleWeapon';
import { fakeWeapon } from '../lib/testUtils';

const weapon = fakeWeapon();

describe('<SingleWeapon />', () => {
  it('renders correctly for a single weapon', () => {
    const { container, debug } = render(
      <MockedProvider>
        <SingleWeapon id={weapon.id} />
      </MockedProvider>
    );
    debug();
  });
});
