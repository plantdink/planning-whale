import { useQuery } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
import SingleAverageWeapon, {
  SINGLE_AVERAGE_WEAPON_QUERY,
} from '../../../components/SingleAverageWeapon';
import { SingleWeaponStyles } from '../../../components/SingleWeapon';
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
