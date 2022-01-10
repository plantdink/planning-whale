import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Shotgun from './Shotgun';

const ALL_SHOTGUNS_QUERY = gql`
  query ALL_SHOTGUNS_QUERY {
    allShotguns {
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

const ShotgunsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Shotguns() {
  const { data, error, loading } = useQuery(ALL_SHOTGUNS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ShotgunsListStyles>
        {data.allShotguns.map((shotgun) => (
          <Shotgun key={shotgun.id} shotgun={shotgun} />
        ))}
      </ShotgunsListStyles>
    </div>
  );
}
