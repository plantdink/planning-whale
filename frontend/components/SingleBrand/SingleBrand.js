import { gql } from '@apollo/client';
import Head from 'next/head';
import { stringToParagraphs } from '../../lib/displayStrings';

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

export default function SingleBrand({ brand }) {
  return (
    <>
      <Head>
        <title>Agent Field Manual | {brand.name}</title>
      </Head>
      <>
        <div className="single-gear-item__title-bar">
          <h1 className="single-gear-item__heading">{brand.name}</h1>
        </div>

        <div className="single-gear-item__content">
          <div className="single-gear-item__details">
            {stringToParagraphs(brand.notes)}
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Core Attribute Type - {brand.coreAttribute}
              </h2>
            </div>
            <p>{brand.coreAttributeValueLevel40} (Level 40)</p>
            <p>{brand.coreAttributeValueWT5} (World Tier 5)</p>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">Set Bonuses</h2>
            </div>
            <p>Whilst wearing:</p>
            <p>
              <span className="single-gear-item__sub-subheading">
                1 piece -{' '}
              </span>
              {brand.setBonusOne}
            </p>
            <p>
              <span className="single-gear-item__sub-subheading">
                2 piece -{' '}
              </span>
              {brand.setBonusTwo}
            </p>
            <p>
              <span className="single-gear-item__sub-subheading">
                3 piece -{' '}
              </span>
              {brand.setBonusThree}
            </p>
          </div>

          <div className="item-image">
            <img
              className="standard-item"
              src={brand.image?.image.publicUrlTransformed}
            />
          </div>
        </div>
      </>
    </>
  );
}
