import { render, screen, cleanup } from '@testing-library/react';
import SingleBrand from '.';
import { fakeBrand } from '../../lib/testUtils';

const brand = fakeBrand();

afterEach(cleanup);

describe('<SingleBrand />', () => {
  it('renders correctly for a single brand', () => {
    const { container, debug } = render(<SingleBrand brand={brand} />);

    // debug();
    const testBrandTitle = screen.getByText(brand.name);
    expect(testBrandTitle).toBeInTheDocument();

    const testBrandCoreAttribute = screen.getByRole('heading', {
      name: /core attribute type \- armour/i,
    });
    expect(testBrandCoreAttribute).toBeInTheDocument();

    const testCoreAttribute40Value = screen.getByText(
      /170,000 armour \(level 40\)/i
    );
    expect(testCoreAttribute40Value).toBeInTheDocument();

    const testCoreAttributeWT5Value = screen.getByText(
      /42,458 armour \(world tier 5\)/i
    );
    expect(testCoreAttributeWT5Value).toBeInTheDocument();

    const testSetBonusOne = screen.getByText(brand.setBonusOne);
    expect(testSetBonusOne).toBeInTheDocument();
    const testSetBonusTwo = screen.getByText(brand.setBonusTwo);
    expect(testSetBonusTwo).toBeInTheDocument();
    const testSetBonusThree = screen.getByText(brand.setBonusThree);
    expect(testSetBonusThree).toBeInTheDocument();

    // debug();
  });
});
