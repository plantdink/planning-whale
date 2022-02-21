import SingleBrand from '../../../components/SingleBrand';
import LinkSmallWeapon from '../../../components/LinkSmallWeapon';

export default function SingleBrandPage({ query }) {
  return (
    <>
      <SingleBrand id={query.id} />
      {/* <LinkSmallWeapon id={query.id} /> */}
    </>
  );
}
