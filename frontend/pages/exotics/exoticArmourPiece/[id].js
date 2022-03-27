import { useQuery, gql } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
// import { SINGLE_EXOTIC_ARMOUR_PIECE_QUERY } from '../../../queries/ArmourPieceQueries';
import SingleArmourPiece from '../../../components/SingleArmourPiece';
import LinkSmallTalent from '../../../components/LinkSmallTalent';
import SingleGearItemStyle from '../../../components/styles/SingleGearItemStyles';

export const SINGLE_EXOTIC_ARMOUR_PIECE_QUERY = gql`
  query SINGLE_EXOTIC_ARMOUR_PIECE_QUERY($id: ID!) {
    allExoticArmourPieces(where: { id: $id }) {
      name
      piece
      modSlots
      coreOne
      coreTwo
      coreThree
      maxCoreOneValueLevel40
      maxCoreTwoValueLevel40
      maxCoreThreeValueLevel40
      maxCoreOneValueLevel30
      attributeOneType
      attributeTwoType
      attributeOneValueLevel40
      attributeTwoValueLevel40
      attributeOneValueLevel30
      attributeTwoValueLevel30
      flavourText
      notes
      availableWT5
      image {
        image {
          publicUrlTransformed
        }
      }
      exoticArmourTalent {
        id
        name
        piece
        isExotic
        image {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function SingleExoticArmourPiecePage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_EXOTIC_ARMOUR_PIECE_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading....</p>;
  if (error) return <DisplayError error={error} />;

  const { ...exoticArmourPiece } = data.allExoticArmourPieces[0];

  return (
    <>
      <SingleGearItemStyle>
        <SingleArmourPiece armourPiece={exoticArmourPiece} />
        {exoticArmourPiece.exoticArmourTalent.length < 2 && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">Unique Talent</h2>
            </div>
            {exoticArmourPiece.exoticArmourTalent.map((talent) => (
              <LinkSmallTalent key={talent.id} talent={talent} />
            ))}
          </>
        )}

        {exoticArmourPiece.exoticArmourTalent.length > 1 && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">Unique Talents</h2>
            </div>
            {exoticArmourPiece.exoticArmourTalent.map((talent) => (
              <LinkSmallTalent key={talent.id} talent={talent} />
            ))}
          </>
        )}
      </SingleGearItemStyle>
    </>
  );
}
