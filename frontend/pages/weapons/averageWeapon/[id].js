import { useQuery } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
import { SINGLE_AVERAGE_WEAPON_QUERY } from '../../../queries/WeaponQueries';
import SingleWeaponStyles from '../../../components/styles/SingleWeaponStyles';
import SingleAverageWeapon from '../../../components/SingleAverageWeapon';
import LinkSmallWeaponTalent from '../../../components/LinkSmallWeaponTalent';

export default function SingleAverageWeaponPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_AVERAGE_WEAPON_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const weapon = data.allAverageWeapons[0];

  return (
    <>
      <SingleWeaponStyles data-testid="singleAverageWeaponPageTest">
        <SingleAverageWeapon weapon={weapon} />
        <LinkSmallWeaponTalent weapon={weapon} />
      </SingleWeaponStyles>
    </>
  );
}
