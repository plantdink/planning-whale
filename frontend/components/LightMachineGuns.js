import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import LightMachineGun from './LightMachineGun';

const ALL_LIGHT_MACHINE_GUNS_QUERY = gql`
  query ALL_LIGHT_MACHINE_GUNS_QUERY {
    allLightMachineGuns {
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
    }
  }
`;

const LightMachineGunsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function LightMachineGuns() {
  const { data, error, loading } = useQuery(ALL_LIGHT_MACHINE_GUNS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <LightMachineGunsListStyles>
        {data.allLightMachineGuns.map((lightMachineGun) => (
          <LightMachineGun
            key={lightMachineGun.id}
            lightMachineGun={lightMachineGun}
          />
        ))}
      </LightMachineGunsListStyles>
    </div>
  );
}
