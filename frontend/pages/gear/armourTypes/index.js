import { useRouter } from 'next/dist/client/router';
import ArmourTypes from '../../../components/ArmourTypes';

export default function ArmourTypesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <ArmourTypes page={page || 1} />
    </div>
  );
}
