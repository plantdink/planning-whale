import { useQuery } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
import SingleAverageWeapon, {
  SINGLE_AVERAGE_WEAPON_QUERY,
} from '../../../components/SingleAverageWeapon';
import { SingleWeaponStyles } from '../../../components/SingleWeapon';
import LinkSmallWeaponTalent from '../../../components/LinkSmallWeaponTalent';
import AssaultRifleClassNotes, {
  LightMachineGunClassNotes,
  MarksmanRifleClassNotes,
  PistolClassNotes,
  RifleClassNotes,
  ShotgunClassNotes,
  SubMachineGunClassNotes,
} from '../../../components/WeaponClassNotes';

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
        {weapon.class === 'ASSAULT RIFLE' && <AssaultRifleClassNotes />}
        {weapon.class === 'LIGHT MACHINE GUN' && <LightMachineGunClassNotes />}
        {weapon.class === 'MARKSMAN RIFLE' && <MarksmanRifleClassNotes />}
        {weapon.class === 'PISTOL' && <PistolClassNotes />}
        {weapon.class === 'RIFLE' && <RifleClassNotes />}
        {weapon.class === 'SHOTGUN' && <ShotgunClassNotes />}
        {weapon.class === 'SUB MACHINE GUN' && <SubMachineGunClassNotes />}
        <LinkSmallWeaponTalent weapon={weapon} />
      </SingleWeaponStyles>
    </>
  );
}
