import { useRouter } from 'next/dist/client/router';
import ExoticArmourPieces from '../../../components/ExoticArmourPieces';
import GearPagination from '../../../components/GearPagination';

export default function ExoticArmourPiecesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Exotic Armour Piece';
  const gearLink = '/exotics/exoticArmourPieces/';

  return (
    <div>
      <GearPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
      <ExoticArmourPieces page={page || 1} />
      <GearPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
