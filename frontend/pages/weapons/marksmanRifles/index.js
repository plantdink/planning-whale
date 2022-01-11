import { useRouter } from 'next/dist/client/router';
import MarksmanRifles from '../../../components/MarksmanRifles';

export default function MarksmanRiflesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <MarksmanRifles page={page || 1} />
    </div>
  );
}
