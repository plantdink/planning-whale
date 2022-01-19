import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Pistol from './Pistol';
import HeadSEO from './HeadSEO';

const ALL_PISTOLS_QUERY = gql`
  query ALL_PISTOLS_QUERY {
    allWeapons(where: { class: "PISTOL" }) {
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
    }
  }
`;

const PistolsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Pistols() {
  const { data, error, loading } = useQuery(ALL_PISTOLS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <HeadSEO seoTag="Pistols" />
      <PistolsListStyles>
        {data.allWeapons.map((pistol) => (
          <Pistol key={pistol.id} pistol={pistol} />
        ))}
      </PistolsListStyles>
    </div>
  );
}
