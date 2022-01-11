import { useRouter } from 'next/dist/client/router';
import LightMachineGuns from '../../../components/LightMachineGuns';

export default function LightMachineGunsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <LightMachineGuns page={page || 1} />
    </div>
  );
}
