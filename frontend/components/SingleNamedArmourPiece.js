import { gql, useQuery } from '@apollo/client';
import DisplayError from './ErrorMessage';
import HeadSEO from './HeadSEO';
import SingleArmourPiece from './SingleArmourPiece';

const SINGLE_NAMED_ARMOUR_PIECE_QUERY = gql`
  query SINGLE_NAMED_ARMOUR_PIECE_QUERY($id: ID!) {
    allArmourTypes(where: { id: $id }) {
      id
      name
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
  console.log(singleNamedPiece);

  return (
    <>
      <HeadSEO seoTag={singleNamedPiece.name} />
      <SingleArmourPiece id={singleNamedPiece.id} />
    </>
  );
}
