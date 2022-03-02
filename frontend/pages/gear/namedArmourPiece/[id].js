import { useQuery } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
import SingleNamedArmourPiece from '../../../components/SingleNamedArmourPiece';
import LinkSmallBrand from '../../../components/LinkSmallBrand';
import LinkSmallTalent from '../../../components/LinkSmallTalent';
import { SINGLE_NAMED_ARMOUR_PIECE_QUERY } from '../../../queries/ArmourPieceQueries';
import SingleGearItemStyle from '../../../components/styles/SingleGearItemStyles';

export default function SingleNamedArmourPiecePage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_NAMED_ARMOUR_PIECE_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading.....</p>;
  if (error) return <DisplayError error={error} />;

  const { ...singleNamedPiece } = data.allArmourTypes[0];

  return (
    <SingleGearItemStyle>
      <SingleNamedArmourPiece singleNamedPiece={singleNamedPiece} />
      {singleNamedPiece.armourTalent.length > 0 && (
        <>
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Item Unique Talent</h2>
          </div>
          {singleNamedPiece.armourTalent.map((talent) => (
            <LinkSmallTalent key={talent.id} talent={talent} />
          ))}
        </>
      )}
      {singleNamedPiece.brand.length > 0 && (
        <>
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Brand of Item</h2>
          </div>
          {singleNamedPiece.brand.map((brand) => (
            <LinkSmallBrand key={brand.id} brand={brand} />
          ))}
        </>
      )}
    </SingleGearItemStyle>
  );
}
