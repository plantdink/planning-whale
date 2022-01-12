import { useRouter } from 'next/dist/client/router';
import NamedWeapons from '../../../components/NamedWeapons';

export default function NamedWeaponsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <NamedWeapons page={page || 1} />
    </div>
  );
}
