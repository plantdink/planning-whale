import { useRouter } from 'next/dist/client/router';
import ArmourTalents from '../../../components/ArmourTalents';

export default function ArmourTalentsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <ArmourTalents page={page || 1} />
    </div>
  );
}
