import { render, screen } from '@testing-library/react';
import SingleTalent from '../components/SingleTalent';
import LinkSmallPiece from '../components/LinkSmallPiece';
import LinkSmallWeapon from '../components/LinkSmallWeapon';
import {
  fakeChestArmourTalent,
  fakeBackpackArmourTalent,
  fakeWeaponTalent,
} from '../lib/testUtils';

describe('<SingleTalent />', () => {
  let armourTalent = fakeChestArmourTalent();
  it('renders correctly for a Chest talent', () => {
    const { container, debug } = render(
      <SingleTalent singleTalent={armourTalent} />
    );

    const singleTalentTitle = screen.getByText(armourTalent.name);
    expect(singleTalentTitle).toBeInTheDocument();

    const talentPieceIcon = screen.getByAltText(armourTalent.piece);
    expect(talentPieceIcon).toBeInTheDocument();

    const talentImage = screen.getByAltText(armourTalent.image.altText);
    expect(talentImage).toBeInTheDocument();

    const talentType = screen.getByText(armourTalent.type);
    expect(talentType).toBeInTheDocument();

    const talentPVEDescription = screen.getByText(armourTalent.descriptionPVE);
    expect(talentPVEDescription).toBeInTheDocument();

    const talentPVPDescription = screen.getByText(armourTalent.descriptionPVP);
    expect(talentPVPDescription).toBeInTheDocument();
  });

  it('renders correctly for a Backpack talent', () => {
    armourTalent = fakeBackpackArmourTalent();
    const { container, debug } = render(
      <SingleTalent singleTalent={armourTalent} />
    );

    const singleTalentTitle = screen.getByText(armourTalent.name);
    expect(singleTalentTitle).toBeInTheDocument();

    const talentPieceIcon = screen.getByAltText(armourTalent.piece);
    expect(talentPieceIcon).toBeInTheDocument();

    const talentImage = screen.getByAltText(armourTalent.image.altText);
    expect(talentImage).toBeInTheDocument();

    const talentType = screen.getByText(armourTalent.type);
    expect(talentType).toBeInTheDocument();

    const talentPVEDescription = screen.getByText(armourTalent.descriptionPVE);
    expect(talentPVEDescription).toBeInTheDocument();

    const talentPVPDescription = screen.getByText(armourTalent.descriptionPVP);
    expect(talentPVPDescription).toBeInTheDocument();
  });

  it('renders correctly for a Weapon talent', () => {
    const weaponTalent = fakeWeaponTalent();
    const { container, debug } = render(
      <SingleTalent singleTalent={weaponTalent} />
    );
    // debug();

    const singleTalentTitle = screen.getByText(weaponTalent.name);
    expect(singleTalentTitle).toBeInTheDocument();

    const talentPieceIcon = screen.getByAltText('Weapon Talent icon');
    expect(talentPieceIcon).toBeInTheDocument();

    const talentImage = screen.getByAltText(weaponTalent.image.altText);
    expect(talentImage).toBeInTheDocument();

    const talentPVEDescription = screen.getByText(weaponTalent.descriptionPVE);
    expect(talentPVEDescription).toBeInTheDocument();

    const talentPVPDescription = screen.getByText(weaponTalent.descriptionPVP);
    expect(talentPVPDescription).toBeInTheDocument();
  });
});

// ----------------- Talent Page test, multiple components --------------------

describe('<SingleTalent /> <LinkSmallPiece />', () => {
  let armourTalent = fakeChestArmourTalent();
  it('renders both components correctly for a Chest talent', () => {
    const { container, debug } = render(
      <>
        <SingleTalent singleTalent={armourTalent} />
        {armourTalent.piece !== '' && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Compatible Equipment
              </h2>
            </div>
            <LinkSmallPiece piece={armourTalent} />
          </>
        )}
      </>
    );
    // debug();

    const singleTalentTitle = screen.getByText(armourTalent.name);
    expect(singleTalentTitle).toBeInTheDocument();

    const talentPieceIcon = screen.getByAltText(armourTalent.piece);
    expect(talentPieceIcon).toBeInTheDocument();

    const talentImage = screen.getByAltText(armourTalent.image.altText);
    expect(talentImage).toBeInTheDocument();

    const talentType = screen.getByText(armourTalent.type);
    expect(talentType).toBeInTheDocument();

    const talentPVEDescription = screen.getByText(armourTalent.descriptionPVE);
    expect(talentPVEDescription).toBeInTheDocument();

    const talentPVPDescription = screen.getByText(armourTalent.descriptionPVP);
    expect(talentPVPDescription).toBeInTheDocument();

    const link = container.querySelector('a');
    expect(link).toHaveTextContent(armourTalent.piece);
  });

  it('renders both components correctly for a Backpack talent', () => {
    armourTalent = fakeBackpackArmourTalent();
    const { container, debug } = render(
      <>
        <SingleTalent singleTalent={armourTalent} />
        {armourTalent.piece !== '' && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Compatible Equipment
              </h2>
            </div>
            <LinkSmallPiece piece={armourTalent} />
          </>
        )}
      </>
    );
    // debug();

    const singleTalentTitle = screen.getByText(armourTalent.name);
    expect(singleTalentTitle).toBeInTheDocument();

    const talentPieceIcon = screen.getByAltText(armourTalent.piece);
    expect(talentPieceIcon).toBeInTheDocument();

    const talentImage = screen.getByAltText(armourTalent.image.altText);
    expect(talentImage).toBeInTheDocument();

    const talentType = screen.getByText(armourTalent.type);
    expect(talentType).toBeInTheDocument();

    const talentPVEDescription = screen.getByText(armourTalent.descriptionPVE);
    expect(talentPVEDescription).toBeInTheDocument();

    const talentPVPDescription = screen.getByText(armourTalent.descriptionPVP);
    expect(talentPVPDescription).toBeInTheDocument();

    const link = container.querySelector('a');
    expect(link).toHaveTextContent(armourTalent.piece);
  });

  it('renders both components correctly for a Weapon talent', () => {
    const weaponTalent = fakeWeaponTalent();
    const { container, debug } = render(
      <>
        <SingleTalent singleTalent={weaponTalent} />
        <LinkSmallWeapon talent={weaponTalent} />
      </>
    );

    const singleTalentTitle = screen.getByText(weaponTalent.name);
    expect(singleTalentTitle).toBeInTheDocument();

    const talentPieceIcon = screen.getByAltText('Weapon Talent icon');
    expect(talentPieceIcon).toBeInTheDocument();

    const talentImage = screen.getByAltText(weaponTalent.image.altText);
    expect(talentImage).toBeInTheDocument();

    const talentPVEDescription = screen.getByText(weaponTalent.descriptionPVE);
    expect(talentPVEDescription).toBeInTheDocument();

    const talentPVPDescription = screen.getByText(weaponTalent.descriptionPVP);
    expect(talentPVPDescription).toBeInTheDocument();

    if (weaponTalent.classARTalent === true) {
      const link = screen.getByText('Assault Rifles');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classLMGTalent === true) {
      const link = screen.getByText('Light Machine Guns');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classMMRTalent === true) {
      const link = screen.getByText('Marksman Rifles');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classPistolTalent === true) {
      const link = screen.getByText('Pistols');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classRifleTalent === true) {
      const link = screen.getByText('Rifles');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classShotgunTalent === true) {
      const link = screen.getByText('Shotguns');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classSMGTalent === true) {
      const link = screen.getByText('Sub Machine Guns');
      expect(link).toBeInTheDocument();
    }
  });
});
