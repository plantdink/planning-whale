import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import HeadSEO from './HeadSEO';

const SingleGearsetStyle = styled.div`
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
    <SingleGearsetStyle>
      <HeadSEO seoTag={singleGearset.name} />
      <h1>{singleGearset.name}</h1>
      <h2>Core Attribute Type - {singleGearset.coreAttribute}</h2>
      <h3>Level 40 - {singleGearset.coreAttributeValueLevel40}</h3>
      <h3>World Tier 5 - {singleGearset.coreAttributeValueWT5}</h3>
      <h2>Set Bonuses</h2>
      <h3>One piece - {singleGearset.setBonusOne}</h3>
      <h3>Two piece - {singleGearset.setBonusTwo}</h3>
      <h3>Three piece - {singleGearset.setBonusThree}</h3>
      <h2>Gearset Talents</h2>
      <h3>Chest - {singleGearset.setChestTalent}</h3>
      <h3>Backpack - {singleGearset.setBackpackTalent}</h3>
    </SingleGearsetStyle>
  );
}
