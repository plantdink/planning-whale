import { useRouter } from 'next/dist/client/router';
import SubMachineGuns from '../../../components/SubMachineGuns';

export default function SubMachineGunsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <SubMachineGuns page={page || 1} />
    </div>
  );
}
