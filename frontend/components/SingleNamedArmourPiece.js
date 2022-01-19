import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const SingleNamedArmourPieceStyle = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_NAMED_ARMOUR_PIECE_QUERY = gql`
  query SINGLE_NAMED_ARMOUR_PIECE_QUERY($id: ID!) {
    allArmourTypes(where: { id: $id }) {
      name
      notes
      brand {
        name
      }
      armourTalent {
        name
        descriptionPVE
        descriptionPVP
      }
    }
  }
`;

export default function SingleNamedArmourPiece({ id }) {
  const { data, loading, error } = useQuery(SINGLE_NAMED_ARMOUR_PIECE_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading.....</p>;
  if (error) return <DisplayError error={error} />;

  const { ...singleNamedPiece } = data.allArmourTypes[0];
  //   console.log(singleNamedPiece);

  return (
    <SingleNamedArmourPieceStyle>
      <Head>
        <title>Agent Field Manual | {singleNamedPiece.name}</title>
      </Head>
      <h1>
        {singleNamedPiece.name} - {singleNamedPiece.brand[0].name}
      </h1>
      <p>{singleNamedPiece.notes}</p>
      {singleNamedPiece.armourTalent.length === 1 && (
        <>
          <h2>{singleNamedPiece.armourTalent[0].name}</h2>
          <p>{singleNamedPiece.armourTalent[0].descriptionPVE}</p>
        </>
      )}
    </SingleNamedArmourPieceStyle>
  );
}
