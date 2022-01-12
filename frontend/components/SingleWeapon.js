import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import { displayPercentage, hsDisplay } from '../lib/displayNumbers';

const SingleWeaponStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_WEAPON_QUERY = gql`
  query SINGLE_WEAPON_QUERY($id: ID!) {
    allWeapons(where: { id: $id }) {
      class
      model
      family
      magazineSize
      rpm
      modSlots
      reloadSpeed
      reloadSpeedFromEmpty
      accuracy
      stability
      optimalRange
      maxRange
      headshotMultiplier
      weaponBonusType
      maxBonusValue
      damageLevel40
      damageWt5
      notes
      isNamed
      isExotic
    }
  }
`;

export default function SingleWeapon({ id }) {
  const { data, loading, error } = useQuery(SINGLE_WEAPON_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const weapon = data.allWeapons[0];

  return (
    <SingleWeaponStyles>
      <Head>
        <title>Agent Field Manual | {weapon.model}</title>
      </Head>
      <img />
      <div>
        <h1>{weapon.model}</h1>
        <h3>
          Type: {weapon.class} - {weapon.family}
        </h3>
        <div>
          <h2>Base Damage</h2>
          <h3>Level 40: {weapon.damageLevel40}</h3>
          <h3>World Tier 5: {weapon.damageWt5}</h3>
        </div>
        <div>
          <h2>Features</h2>
          <h3>Bonus Damage Type: {weapon.weaponBonusType}</h3>
          <h3>Max Bonus: {weapon.maxBonusValue}%</h3>
          <h3>Headshot Multiplier: {hsDisplay(weapon.headshotMultiplier)}</h3>
        </div>
        <div>
          <h2>Specifications</h2>
          <h3>Rate of fire: {weapon.rpm} rounds per minute</h3>
          <h3>Magazine: {weapon.magazineSize} rounds</h3>
          <h3>Mod Slots Available: {weapon.modSlots}</h3>
        </div>
        <div>
          <h2>Characteristics</h2>
          <h3>Accuracy: {displayPercentage(weapon.accuracy)}%</h3>
          <h3>Stability: {displayPercentage(weapon.stability)}%</h3>
          <h3>Optimal Range: {weapon.optimalRange}m</h3>
          <h3>Max Range: {weapon.maxRange}m</h3>
        </div>
        <div>
          <h3>Notes</h3>
          <p>{weapon.notes}</p>
        </div>
      </div>
    </SingleWeaponStyles>
  );
}
