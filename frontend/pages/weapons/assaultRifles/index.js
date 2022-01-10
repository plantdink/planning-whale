import { useRouter } from 'next/dist/client/router';
import AssaultRifles from '../../../components/AssaultRifles';

export default function AssaultRiflesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <AssaultRifles page={page || 1} />
    </div>
  );
}
