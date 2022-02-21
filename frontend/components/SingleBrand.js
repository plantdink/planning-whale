import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import { stringToParagraphs } from '../lib/displayStrings';
import DisplayError from './ErrorMessage';
import SingleGearItemStyle from './styles/SingleGearItemStyles';

const SINGLE_BRAND_QUERY = gql`
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
    }
  }
`;

export default function SingleBrand({ id }) {
  const { data, loading, error } = useQuery(SINGLE_BRAND_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading.....</p>;
  if (error) return <DisplayError error={error} />;

  const singleBrand = data.allBrands[0];

  return (
    <>
      <Head>
        <title>Agent Field Manual | {singleBrand.name}</title>
      </Head>
      <SingleGearItemStyle>
        <>
          <h1 className="single-gear-item__heading">{singleBrand.name}</h1>
          <div className="single-gear-item__content">
            <div className="single-item__details">
              {stringToParagraphs(singleBrand.notes)}
              <h2 className="single-gear-item__subheading">
                Core Attribute Type - {singleBrand.coreAttribute}
              </h2>
              <p>{singleBrand.coreAttributeValueLevel40} (Level 40)</p>
              <p>{singleBrand.coreAttributeValueWT5} (World Tier 5)</p>
              <h2 className="single-gear-item__subheading">Set Bonuses</h2>
              <p>
                <span className="single-gear-item__sub-subheading">
                  1 piece -{' '}
                </span>
                {singleBrand.setBonusOne}
              </p>
              <p>
                <span className="single-gear-item__sub-subheading">
                  2 piece -{' '}
                </span>
                {singleBrand.setBonusTwo}
              </p>
              <p>
                <span className="single-gear-item__sub-subheading">
                  3 piece -{' '}
                </span>
                {singleBrand.setBonusThree}
              </p>
            </div>
            <div className="item-image">
              <img
                className="standard-item"
                src={singleBrand.image?.image.publicUrlTransformed}
              />
            </div>
          </div>
        </>
      </SingleGearItemStyle>
    </>
  );
}
