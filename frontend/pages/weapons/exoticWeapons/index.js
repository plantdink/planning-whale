import { useRouter } from 'next/dist/client/router';
import ExoticWeapons from '../../../components/ExoticWeapons';

export default function ExoticWeaponsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <ExoticWeapons page={page || 1} />
    </div>
  );
}
