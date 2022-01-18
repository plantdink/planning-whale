import { useRouter } from 'next/dist/client/router';
import WeaponTalents from '../../../components/WeaponTalents';

export default function WeaponTalentsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <WeaponTalents page={page || 1} />
    </div>
  );
}
