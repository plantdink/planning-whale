import { render, screen, cleanup } from '@testing-library/react';
import SingleGearset from '.';
import { fakeGearset } from '../../lib/testUtils';

const gearset = fakeGearset();

afterEach(cleanup);

describe('<SingleGearset />', () => {
  it('renders correctly for a single gearset', () => {
    const { container, debug } = render(<SingleGearset gearset={gearset} />);

    const testGearsetTitle = screen.getByText(gearset.name);
    expect(testGearsetTitle).toBeInTheDocument();

    const testGearsetImage = screen.getByAltText(gearset.image.altText);
    expect(testGearsetImage).toBeInTheDocument();

    const testGearsetCoreAttribute = screen.getByRole('heading', {
      name: /core attribute type \- utility/i,
    });
    expect(testGearsetCoreAttribute).toBeInTheDocument();

    const testGearsetCoreAttribute40Value = screen.getByText(
      /\+1 skill tier \(level 40\)/i
    );
    expect(testGearsetCoreAttribute40Value).toBeInTheDocument();

    const testGearsetCoreAttributeWT5Value = screen.getByText(
      /\+1 skill tier \(world tier 5\)/i
    );
    expect(testGearsetCoreAttributeWT5Value).toBeInTheDocument();

    const testGearsetSetBonusOne = screen.getByText(/15% status effects/i);
    expect(testGearsetSetBonusOne).toBeInTheDocument();

    const testGearsetSetBonusTwo = screen.getByText(
      /15% skill haste, 30% hazard protection/i
    );
    expect(testGearsetSetBonusTwo).toBeInTheDocument();

    const testGearsetSetBonusThree = screen.getByText(
      /enemies that die while affected by your status effects spread those status effects to another enemy within 10m and refresh the duration\./i
    );
    expect(testGearsetSetBonusThree).toBeInTheDocument();

    const testGearsetChestTalent = screen.getByText(
      /increase contagion range from 10m to 15m/i
    );
    expect(testGearsetChestTalent).toBeInTheDocument();

    const testGearsetBackpackTalent = screen.getByText(
      /amplifies all damage you deal to status affected targets by 30%/i
    );
    expect(testGearsetBackpackTalent).toBeInTheDocument();
  });
});
