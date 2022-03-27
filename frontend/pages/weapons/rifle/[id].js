import { useQuery } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
import SingleWeapon, {
  SINGLE_WEAPON_QUERY,
  SingleWeaponStyles,
} from '../../../components/SingleWeapon';
import LinkSmallWeaponTalent from '../../../components/LinkSmallWeaponTalent';

export default function SingleRiflePage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_WEAPON_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const weapon = data.allWeapons[0];
  const avgWeapon = weapon.averageWeapon;

  return (
    <>
      <SingleWeaponStyles data-testid="singleWeaponTest">
        <SingleWeapon weapon={weapon} avgWeapon={avgWeapon} />
        <LinkSmallWeaponTalent weapon={weapon} />
      </SingleWeaponStyles>
    </>
  );
}
