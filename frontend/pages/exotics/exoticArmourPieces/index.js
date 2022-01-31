import { useRouter } from 'next/dist/client/router';
import ExoticArmourPieces from '../../../components/ExoticArmourPieces';
import GearPagination from '../../../components/GearPagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';
import { PaginationContainerStyles } from '../../../components/styles/PaginationStyles';

export default function ExoticArmourPiecesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Exotic Armour Piece';
  const gearLink = '/exotics/exoticArmourPieces/';

  return (
    <>
      <PaginationContainerStyles>
        <GearPagination
          gearLink={gearLink}
          queryString={queryString}
          page={page || 1}
        />
      </PaginationContainerStyles>
      <ContentContainerStyles>
        <ExoticArmourPieces page={page || 1} />
      </ContentContainerStyles>
      <PaginationContainerStyles>
        <GearPagination
          gearLink={gearLink}
          queryString={queryString}
          page={page || 1}
        />
      </PaginationContainerStyles>
    </>
  );
}
