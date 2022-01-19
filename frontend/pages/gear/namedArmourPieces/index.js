import { useRouter } from 'next/dist/client/router';
import NamedArmourPieces from '../../../components/NamedArmourPieces';

export default function NamedArmourPiecesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <NamedArmourPieces page={page || 1} />
    </div>
  );
}
