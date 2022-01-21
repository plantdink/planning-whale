import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { perPage } from '../config';
import AssaultRifle from './AssaultRifle';
import DisplayError from './ErrorMessage';

const ALL_ASSAULT_RIFLES_QUERY = gql`
  query ALL_ASSAULT_RIFLES_QUERY($skip: Int = 0, $first: Int) {
    allWeapons(where: { class: "ASSAULT RIFLE" }, first: $first, skip: $skip) {
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

export default function AssaultRifles({ page }) {
  const { data, error, loading } = useQuery(ALL_ASSAULT_RIFLES_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <AssaultRiflesListStyles>
        {data.allWeapons.map((assaultRifle) => (
          <AssaultRifle key={assaultRifle.id} assaultRifle={assaultRifle} />
        ))}
      </AssaultRiflesListStyles>
    </div>
  );
}
