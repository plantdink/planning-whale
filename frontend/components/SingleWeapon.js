import { gql, useQuery } from '@apollo/client';
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
    allAssaultRifles(where: { id: $id }) {
      model
    }
    allLightMachineGuns(where: { id: $id }) {
      model
    }
    allMarksmanRifles(where: { id: $id }) {
      model
    }
    allPistols(where: { id: $id }) {
      model
    }
    allRifles(where: { id: $id }) {
      model
    }
    allShotguns(where: { id: $id }) {
      model
    }
    allSubMachineGuns(where: { id: $id }) {
      model
    }
  }
`;

export default function SingleWeapon({ id }) {
  const { data, loading, error } = useQuery(SINGLE_WEAPON_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  console.log({ data });

  return (
    <SingleWeaponStyles>
      <img />
      <div>
        <h2>Info to come</h2>
      </div>
    </SingleWeaponStyles>
  );
}
