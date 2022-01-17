import { useRouter } from 'next/dist/client/router';
import ExoticArmourPieces from '../../../components/ExoticArmourPieces';

export default function ExoticArmourPiecesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <ExoticArmourPieces page={page || 1} />
    </div>
  );
}
