import { render, screen, cleanup } from '@testing-library/react';
import SingleArmourPiece from '../components/SingleArmourPiece';
import { fakeArmourPiece, fakeNamedArmourPiece } from '../lib/testUtils';
import { displayPercentage, humanReadableNumber } from '../lib/displayNumbers';

const armourPiece = fakeArmourPiece();

afterEach(cleanup);

describe('<SingleArmourPiece />', () => {
  it('renders correctly for a single armour piece', async () => {
    const { container, debug } = render(
      <SingleArmourPiece armourPiece={armourPiece} />
    );

    await screen.findByTestId('singleArmourPiece');
    expect(container).toMatchSnapshot();

    const testArmourPieceTitle = screen.getByText(armourPiece.name);
    expect(testArmourPieceTitle).toBeInTheDocument();

    const testArmourPieceIcon = await screen.findByTestId('itemIcon');
    expect(testArmourPieceIcon).toBeInTheDocument();

    const testFlavourText = await screen.findByTestId('flavourText');
    if (armourPiece.flavourText !== null)
      expect(testFlavourText).toBeInTheDocument();
    expect(testFlavourText).toHaveTextContent(armourPiece.flavourText);

    const testPiece = await screen.findByTestId('itemPiece');
    if (armourPiece.piece !== '') expect(testPiece).toBeInTheDocument();
    expect(testPiece).toHaveTextContent(armourPiece.piece);

    const testNotes = await screen.findByTestId('itemNotes');
    if (armourPiece.notes !== '') expect(testNotes).toBeInTheDocument();
    expect(testNotes).toHaveTextContent(armourPiece.notes);
  });
});
