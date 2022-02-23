import { useQuery } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
import { SINGLE_ARMOUR_PIECE_QUERY } from '../../../queries/ArmourPieceQueries';
import SingleArmourPiece from '../../../components/SingleArmourPiece';
import LinkSmallTalent from '../../../components/LinkSmallTalent';
import SingleGearItemStyle from '../../../components/styles/SingleGearItemStyles';
import LinkSmallBrand from '../../../components/LinkSmallBrand';

export default function SingleArmourTypePage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_ARMOUR_PIECE_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading....</p>;
  if (error) return <DisplayError error={error} />;

  const { ...armourPiece } =
    data.allArmourTypes[0] || data.allExoticArmourPieces[0];

  return (
    <>
      <SingleGearItemStyle>
        <SingleArmourPiece armourPiece={armourPiece} />
        {armourPiece.armourTalent.length > 0 && (
          <>
            <h2 className="single-gear-item__subheading">Item Unique Talent</h2>
            {armourPiece.armourTalent.map((talent) => (
              <LinkSmallTalent key={talent.id} talent={talent} />
            ))}
          </>
        )}
        {armourPiece.brand.length > 0 && (
          <>
            <h2 className="single-gear-item__subheading">Brand of Item</h2>
            <LinkSmallBrand brand={armourPiece.brand[0]} />
          </>
        )}
      </SingleGearItemStyle>
    </>
  );
}
