import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import MarksmanRifle from './MarksmanRifle';

const ALL_MARKSMAN_RIFLES_QUERY = gql`
  query ALL_MARKSMAN_RIFLES_QUERY {
    allMarksmanRifles {
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

const MarksmanRiflesListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function MarksmanRifles() {
  const { data, error, loading } = useQuery(ALL_MARKSMAN_RIFLES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <MarksmanRiflesListStyles>
        {data.allMarksmanRifles.map((marksmanRifle) => (
          <MarksmanRifle key={marksmanRifle.id} marksmanRifle={marksmanRifle} />
        ))}
      </MarksmanRiflesListStyles>
    </div>
  );
}
