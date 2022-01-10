import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const SingleWeaponStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_WEAPON_QUERY = gql`
  query SINGLE_WEAPON_QUERY($id: ID!) {
    AssaultRifle(where: { id: $id }) {
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
      damageLevel40
      damageWt5
      notes
      isNamed
      isExotic
    }
  }
`;

export default function SingleWeapon({ id }) {
  console.log();
  const { data, loading, error } = useQuery(SINGLE_WEAPON_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { AssaultRifle } = data;
  return (
    <SingleWeaponStyles>
      <Head>
        <title>Agent Field Manual | {AssaultRifle.model}</title>
      </Head>
      <img />
      <div>
        <h2>{AssaultRifle.model}</h2>
      </div>
    </SingleWeaponStyles>
  );
}
