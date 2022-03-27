import { useQuery, gql } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
// import { SINGLE_BRAND_QUERY } from '../../../queries/BrandQueries';
import SingleBrand from '../../../components/SingleBrand';
import LinkSmallPiece from '../../../components/LinkSmallPiece';
import LinkSmallTalent from '../../../components/LinkSmallTalent';
import SingleGearItemStyle from '../../../components/styles/SingleGearItemStyles';

export const SINGLE_BRAND_QUERY = gql`
  query SINGLE_BRAND_QUERY($id: ID!) {
    allBrands(where: { id: $id }) {
      name
      coreAttribute
      coreAttributeValueLevel40
      coreAttributeValueWT5
      setBonusOne
      setBonusTwo
      setBonusThree
      image {
        image {
          publicUrlTransformed
        }
      }
      notes
      armourTalent {
        id
        name
        piece
        descriptionPVE
        isNamed
        isExotic
        image {
          image {
            publicUrlTransformed
          }
        }
        namedArmourPiece {
          id
          name
        }
      }
      armourType {
        id
        name
        piece
        isNamed
        image {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function SingleBrandPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_BRAND_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading.....</p>;
  if (error) return <DisplayError error={error} />;

  const singleBrand = data.allBrands[0];
  // console.log('SingleBrand', singleBrand);

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
