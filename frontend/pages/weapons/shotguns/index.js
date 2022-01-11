import { useRouter } from 'next/dist/client/router';
import Shotguns from '../../../components/Shotguns';

export default function ShotgunsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Shotguns page={page || 1} />
    </div>
  );
}
