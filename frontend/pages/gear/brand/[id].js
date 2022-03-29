import { useQuery } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
import SingleBrand, {
  SINGLE_BRAND_QUERY,
} from '../../../components/SingleBrand';
import LinkSmallPiece from '../../../components/LinkSmallPiece';
import LinkSmallTalent from '../../../components/LinkSmallTalent';
import { SingleGearItemStyle } from '../../../components/SingleArmourPiece';

export default function SingleBrandPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_BRAND_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading.....</p>;
  if (error) return <DisplayError error={error} />;

  const singleBrand = data.allBrands[0];

  return (
    <>
      <SingleGearItemStyle>
        <SingleBrand brand={singleBrand} />

        {singleBrand.armourTalent.length === 1 && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Brand Unique Talent
              </h2>
            </div>
            {singleBrand.armourTalent.map((talent) => (
              <LinkSmallTalent key={talent.id} talent={talent} />
            ))}
          </>
        )}

        {singleBrand.armourTalent.length > 1 && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Brand Unique Talents
              </h2>
            </div>
            {singleBrand.armourTalent.map((talent) => (
              <LinkSmallTalent key={talent.id} talent={talent} />
            ))}
          </>
        )}

        {singleBrand.armourType.length > 0 && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Brand Unique Equipment
              </h2>
            </div>
            {singleBrand.armourType.map((piece) => (
              <LinkSmallPiece piece={piece} />
            ))}
          </>
        )}
      </SingleGearItemStyle>
    </>
  );
}
