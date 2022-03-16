import SingleAverageWeapon from '../../../components/SingleAverageWeapon';

export default function SingleAverageWeaponPage({ query }) {
  return (
    <>
      <SingleAverageWeapon id={query.id} />
    </>
  );
}
