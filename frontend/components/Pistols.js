import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import Pistol from './Pistol';

const ALL_PISTOLS_QUERY = gql`
  query ALL_PISTOLS_QUERY($skip: Int = 0, $first: Int) {
    allWeapons(where: { class: "PISTOL" }, first: $first, skip: $skip) {
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

const PistolsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Pistols({ page }) {
  const { data, error, loading } = useQuery(ALL_PISTOLS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <PistolsListStyles>
        {data.allWeapons.map((pistol) => (
          <Pistol key={pistol.id} pistol={pistol} />
        ))}
      </PistolsListStyles>
    </div>
  );
}
