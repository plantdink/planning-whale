import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import AssaultRifle from './AssaultRifle';
import HeadSEO from './HeadSEO';

const ALL_ASSAULT_RIFLES_QUERY = gql`
  query ALL_ASSAULT_RIFLES_QUERY {
    allWeapons(where: { class: "ASSAULT RIFLE" }) {
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

const AssaultRiflesListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function AssaultRifles() {
  const { data, error, loading } = useQuery(ALL_ASSAULT_RIFLES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <HeadSEO seoTag="Assault Rifles" />
      <AssaultRiflesListStyles>
        {data.allWeapons.map((assaultRifle) => (
          <AssaultRifle key={assaultRifle.id} assaultRifle={assaultRifle} />
        ))}
      </AssaultRiflesListStyles>
    </div>
  );
}
