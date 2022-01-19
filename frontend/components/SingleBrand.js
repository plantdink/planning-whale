import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const SingleBrandStyle = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

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
    <SingleBrandStyle>
      <Head>
        <title>Agent Field Manual | {singleBrand.name}</title>
      </Head>
      <h1>{singleBrand.name}</h1>
      <h2>Core Attribute Type - {singleBrand.coreAttribute}</h2>
      <h3>Level 40 - {singleBrand.coreAttributeValueLevel40}</h3>
      <h3>World Tier 5 - {singleBrand.coreAttributeValueWT5}</h3>
      <h2>Set Bonuses</h2>
      <h3>One piece - {singleBrand.setBonusOne}</h3>
      <h3>Two piece - {singleBrand.setBonusTwo}</h3>
      <h3>Three piece - {singleBrand.setBonusThree}</h3>
    </SingleBrandStyle>
  );
}
