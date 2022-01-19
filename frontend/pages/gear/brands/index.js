import { useRouter } from 'next/dist/client/router';
import Brands from '../../../components/Brands';

export default function BrandsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Brands page={page || 1} />
    </div>
  );
}
