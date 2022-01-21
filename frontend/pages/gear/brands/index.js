import { useRouter } from 'next/dist/client/router';
import Brands from '../../../components/Brands';
import GearPagination from '../../../components/GearPagination';

export default function BrandsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Brand';
  const gearLink = '/gear/brands/';

  return (
    <div>
      <GearPagination
        queryString={queryString}
        gearLink={gearLink}
        page={page || 1}
      />
      <Brands page={page || 1} />
      <GearPagination
        queryString={queryString}
        gearLink={gearLink}
        page={page || 1}
      />
    </div>
  );
}
