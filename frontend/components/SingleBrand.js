import Head from 'next/head';
import { stringToParagraphs } from '../lib/displayStrings';

export default function SingleBrand({ brand }) {
  return (
    <>
      <Head>
        <title>Agent Field Manual | {brand.name}</title>
      </Head>
      <>
        <h1 className="single-gear-item__heading">{brand.name}</h1>
        <div className="single-gear-item__content">
          <div className="single-item__details">
            {stringToParagraphs(brand.notes)}
            <h2 className="single-gear-item__subheading">
              Core Attribute Type - {brand.coreAttribute}
            </h2>
            <p>{brand.coreAttributeValueLevel40} (Level 40)</p>
            <p>{brand.coreAttributeValueWT5} (World Tier 5)</p>
            <h2 className="single-gear-item__subheading">Set Bonuses</h2>
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
