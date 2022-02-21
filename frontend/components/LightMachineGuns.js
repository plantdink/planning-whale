import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import LightMachineGun from './LightMachineGun';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

const ALL_LIGHT_MACHINE_GUNS_QUERY = gql`
  query ALL_LIGHT_MACHINE_GUNS_QUERY($skip: Int, $first: Int) {
    allWeapons(
      where: { class: "LIGHT MACHINE GUN" }
      first: $first
      skip: $skip
    ) {
      id
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
      image {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const LightMachineGunsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function LightMachineGuns({ page }) {
  const { data, error, loading } = useQuery(ALL_LIGHT_MACHINE_GUNS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <LightMachineGunsListStyles>
        {data.allWeapons.map((lightMachineGun) => (
          <LightMachineGun
            key={lightMachineGun.id}
            lightMachineGun={lightMachineGun}
          />
        ))}
      </LightMachineGunsListStyles>
    </div>
  );
}
