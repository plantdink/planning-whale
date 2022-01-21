import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Shotgun from './Shotgun';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';

const ALL_SHOTGUNS_QUERY = gql`
  query ALL_SHOTGUNS_QUERY($skip: Int = 0, $first: Int) {
    allWeapons(where: { class: "SHOTGUN" }, first: $first, skip: $skip) {
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

export default function Shotguns({ page }) {
  const { data, error, loading } = useQuery(ALL_SHOTGUNS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <ShotgunsListStyles>
        {data.allWeapons.map((shotgun) => (
          <Shotgun key={shotgun.id} shotgun={shotgun} />
        ))}
      </ShotgunsListStyles>
    </div>
  );
}
