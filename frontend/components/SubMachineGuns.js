import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import SubMachineGun from './SubMachineGun';
import HeadSEO from './HeadSEO';

const ALL_SUB_MACHINE_GUNS_QUERY = gql`
  query ALL_SUB_MACHINE_GUNS_QUERY {
    allWeapons(where: { class: "SUB MACHINE GUN" }) {
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

const SubMachineGunsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function SubMachineGuns() {
  const { data, error, loading } = useQuery(ALL_SUB_MACHINE_GUNS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <HeadSEO seoTag="Submachine Guns" />
      <SubMachineGunsListStyles>
        {data.allWeapons.map((subMachineGun) => (
          <SubMachineGun key={subMachineGun.id} subMachineGun={subMachineGun} />
        ))}
      </SubMachineGunsListStyles>
    </div>
  );
}
