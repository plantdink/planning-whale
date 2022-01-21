import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Rifle from './Rifle';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';

const ALL_RIFLES_QUERY = gql`
  query ALL_RIFLES_QUERY($skip: Int = 0, $first: Int) {
    allWeapons(where: { class: "RIFLE" }, first: $first, skip: $skip) {
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

export default function Rifles({ page }) {
  const { data, error, loading } = useQuery(ALL_RIFLES_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <RiflesListStyles>
        {data.allWeapons.map((rifle) => (
          <Rifle key={rifle.id} rifle={rifle} />
        ))}
      </RiflesListStyles>
    </div>
  );
}
