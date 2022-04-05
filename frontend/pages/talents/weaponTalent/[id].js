import { useQuery } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
import { SINGLE_TALENT_QUERY } from '../../../queries/TalentQueries';
import SingleTalent from '../../../components/SingleTalent';
import LinkSmallWeapon from '../../../components/LinkSmallWeapon';
import { SingleGearItemStyle } from '../../../components/SingleArmourPiece';
import HeadSEOTag from '../../../components/HeadSEOTag';

export default function SingleWeaponTalentPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_TALENT_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { ...singleTalent } = data.allWeaponTalents[0];

  return (
    <>
      <SingleGearItemStyle>
        <>
          <HeadSEOTag item={singleTalent} />
          <SingleTalent singleTalent={singleTalent} />
          <LinkSmallWeapon talent={singleTalent} />
        </>
      </SingleGearItemStyle>
    </>
  );
}
