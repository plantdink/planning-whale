import { gql, useQuery } from '@apollo/client';
import DisplayError from './ErrorMessage';
import HeadSEO from './HeadSEO';
import SingleGearItemStyle from './styles/SingleGearItemStyles';
import { stringToParagraphs } from '../lib/displayStrings';

const SINGLE_GEARSET_QUERY = gql`
  query SINGLE_GEARSET_QUERY($id: ID!) {
    allGearsets(where: { id: $id }) {
      name
      coreAttribute
      coreAttributeValueLevel40
      coreAttributeValueWT5
      setBonusOne
      setBonusTwo
      setBonusThree
      setBackpackTalent
      setChestTalent
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
      notes
    }
  }
`;

export default function SingleGearset({ id }) {
  const { data, loading, error } = useQuery(SINGLE_GEARSET_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading....</p>;
  if (error) return <DisplayError error={error} />;

  const singleGearset = data.allGearsets[0];

  return (
    <>
      <HeadSEO seoTag={singleGearset.name} />
      <SingleGearItemStyle>
        <>
          <h1 className="single-gear-item__heading gearset-item">
            {singleGearset.name}
          </h1>
          <div className="single-gear-item__content">
            <div className="single-item__details">
              {stringToParagraphs(singleGearset.notes)}
              <h2 className="single-gear-item__subheading">
                Core Attribute Type - {singleGearset.coreAttribute}
              </h2>
              <p>{singleGearset.coreAttributeValueLevel40} (Level 40)</p>
              <p>{singleGearset.coreAttributeValueWT5} (World Tier 5) </p>
              <h2 className="single-gear-item__subheading">Set Bonuses</h2>
              <p>
                <span className="single-gear-item__sub-subheading">
                  1 Piece -{' '}
                </span>
                {singleGearset.setBonusOne}
              </p>
              <p>
                <span className="single-gear-item__sub-subheading">
                  2 Piece -{' '}
                </span>
                {singleGearset.setBonusTwo}
              </p>
              <p>
                <span className="single-gear-item__sub-subheading">
                  3 Piece -{' '}
                </span>
                {singleGearset.setBonusThree}
              </p>
              <p>
                <span className="single-gear-item__sub-subheading">
                  Chest -{' '}
                </span>
                {singleGearset.setChestTalent}
              </p>
              <p>
                <span className="single-gear-item__sub-subheading">
                  Backpack -{' '}
                </span>
                {singleGearset.setBackpackTalent}
              </p>
            </div>
            <div className="item-image">
              <img
                className="gearset-item"
                src={singleGearset.image?.image.publicUrlTransformed}
                alt={singleGearset.image?.altText}
              />
            </div>
          </div>
        </>
      </SingleGearItemStyle>
    </>
  );
}
