import { useRouter } from 'next/dist/client/router';
import Rifles from '../../../components/Rifles';

export default function RiflesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Rifles page={page || 1} />
    </div>
  );
}
