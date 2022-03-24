import { render, screen } from '@testing-library/react';
import SingleWeapon from '../components/SingleWeapon';
import { fakeWeapon, fakeAverageWeapon } from '../lib/testUtils';
import {
  humanReadableNumber,
  hsDisplay,
  displayPercentage,
  millisecondsToSeconds,
} from '../lib/displayNumbers';
import { deAbbreviate } from '../lib/abbreviationsDictionary';

const weapon = fakeWeapon();
const avgWeapon = fakeAverageWeapon();

describe('<SingleWeapon />', () => {
  it('renders the data correctly for a single weapon', () => {
    const { container, debug } = render(
      <SingleWeapon weapon={weapon} avgWeapon={avgWeapon} />
    );
    // debug();

    expect(container).toMatchSnapshot();

    const weaponTitle = screen.getByText(weapon.model);
    expect(weaponTitle).toBeInTheDocument();

    const weaponDamageLvl40 = `${humanReadableNumber(
      weapon.damageLevel40
    )} (Level 40)`;
    const testLvl40WeaponDamage = screen.getByText(weaponDamageLvl40);
    expect(testLvl40WeaponDamage).toBeInTheDocument();

    const weaponDamageWT5 = `${humanReadableNumber(
      weapon.damageWt5
    )} (World Tier 5)`;
    const testWT5WeaponDamage = screen.getByText(weaponDamageWT5);
    expect(testWT5WeaponDamage).toBeInTheDocument();

    // flavour text blockquote should not be visible if the weapon has null or an empty string
    if (weapon.flavourText !== null || '') {
      const flavourText = container.querySelector('blockquote');
      expect(flavourText).not.toBeInTheDocument();
    }

    const weaponTestBonusDamage = `${weapon.maxBonusValue}% ${deAbbreviate(
      weapon.weaponBonusType
    )}`;
    // https://polvara.me/posts/five-things-you-didnt-know-about-testing-library
    const screenBonusDamage = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === weaponTestBonusDamage;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(screenBonusDamage).toBeInTheDocument();

    const weaponTestHSDMultiplier = `${hsDisplay(
      weapon.headshotMultiplier
    )} x Headshot Multiplier`;
    const screenHSDMultiplier = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === weaponTestHSDMultiplier;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(screenHSDMultiplier).toBeInTheDocument();

    const weaponTestRPM = `${weapon.rpm} rounds per minute rate of fire`;
    const screenRPM = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === weaponTestRPM;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(screenRPM).toBeInTheDocument();

    const weaponTestMagazineSize = `${weapon.magazineSize} round magazine`;
    const screenMagazineSize = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === weaponTestMagazineSize;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(screenMagazineSize).toBeInTheDocument();

    const weaponTestModSlots = `${weapon.modSlots} modification slots`;
    const screenModSlots = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === weaponTestModSlots;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(screenModSlots).toBeInTheDocument();

    const weaponTestAccuracy = `${displayPercentage(
      weapon.accuracy
    )}% accuracy`;
    const screenAccuracy = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === weaponTestAccuracy;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(screenAccuracy).toBeInTheDocument();

    const weaponTestStability = `${displayPercentage(
      weapon.stability
    )}% stability`;
    const screenStability = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === weaponTestStability;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(screenStability).toBeInTheDocument();

    const weaponTestOptimalRange = `${weapon.optimalRange}m optimal range`;
    const screenOptimalRange = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === weaponTestOptimalRange;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(screenOptimalRange).toBeInTheDocument();

    const weaponTestMaxRange = `${weapon.maxRange}m max range`;
    const screenMaxRange = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === weaponTestMaxRange;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(screenMaxRange).toBeInTheDocument();

    const weaponTestReloadSpeed = `${millisecondsToSeconds(
      weapon.reloadSpeed
    )} seconds reload speed`;
    const screenReloadSpeed = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === weaponTestReloadSpeed;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(screenReloadSpeed).toBeInTheDocument();

    const weaponTestEmptyReloadSpeed = `${millisecondsToSeconds(
      weapon.reloadSpeedFromEmpty
    )} seconds reload speed (empty magazine)`;
    const screenEmptyReload = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === weaponTestEmptyReloadSpeed;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(screenEmptyReload).toBeInTheDocument();

    if (weapon.accuracy || weapon.stability > 0) {
      const small = container.querySelector('small');
      expect(small).not.toBeInTheDocument();
    }

    // it('Renders a Radar Chart', () => {
    //   const wrapper = mount(
    //     <RadarChart />
    //   )
    //   expect(wrapper).toMatchSnapshot();
  });
});
