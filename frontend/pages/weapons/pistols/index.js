import { useRouter } from 'next/dist/client/router';
import Pistols from '../../../components/Pistols';

export default function PistolsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Pistols page={page || 1} />
    </div>
  );
}
