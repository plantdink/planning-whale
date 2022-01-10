import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Rifle from './Rifle';

const ALL_RIFLES_QUERY = gql`
  query ALL_RIFLES_QUERY {
    allRifles {
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

const RiflesListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Rifles() {
  const { data, error, loading } = useQuery(ALL_RIFLES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <RiflesListStyles>
        {data.allRifles.map((rifle) => (
          <Rifle key={rifle.id} rifle={rifle} />
        ))}
      </RiflesListStyles>
    </div>
  );
}
