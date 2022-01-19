import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import HeadSEO from './HeadSEO';

const SingleTalentStyle = styled.div`
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

const SINGLE_TALENT_QUERY = gql`
  query SINGLE_TALENT_QUERY($id: ID!) {
    allArmourTalents(where: { id: $id }) {
      id
      name
    }
    allWeaponTalents(where: { id: $id }) {
      id
      name
    }
  }
`;

export default function SingleTalent({ id }) {
  const { data, loading, error } = useQuery(SINGLE_TALENT_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { ...singleTalent } =
    data.allArmourTalents[0] || data.allWeaponTalents[0];

  return (
    <>
      <HeadSEO seoTag={singleTalent.name} />
      <SingleTalentStyle>
        <h3>{singleTalent.name}</h3>
      </SingleTalentStyle>
    </>
  );
}
