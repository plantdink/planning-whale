import { useRouter } from 'next/dist/client/router';
import Gearsets from '../../../components/Gearsets';

export default function GearsetsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Gearsets page={page || 1} />
    </div>
  );
}
