import { useRouter } from 'next/dist/client/router';
import NamedArmourPieces from '../../../components/NamedArmourPieces';
import GearPagination from '../../../components/GearPagination';

export default function NamedArmourPiecesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Named Armour Piece';
  const gearLink = '/gear/namedArmourPieces/';

  return (
    <div>
      <GearPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
      <NamedArmourPieces page={page || 1} />
      <GearPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
