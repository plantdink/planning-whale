import { useQuery } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
import SingleArmourPiece, {
  SINGLE_EXOTIC_ARMOUR_PIECE_QUERY,
  SingleGearItemStyle,
} from '../../../components/SingleArmourPiece';
import LinkSmallTalent from '../../../components/LinkSmallTalent';
import HeadSEOTag from '../../../components/HeadSEOTag';

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
        <HeadSEOTag item={exoticArmourPiece} />
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
