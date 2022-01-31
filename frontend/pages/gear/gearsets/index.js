import { useRouter } from 'next/dist/client/router';
import EquipmentPagination from '../../../components/GearPagination';
import Gearsets from '../../../components/Gearsets';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';
import { PaginationContainerStyles } from '../../../components/styles/PaginationStyles';

export default function GearsetsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Gearset';
  const gearLink = '/gear/gearsets/';

  return (
    <>
      <PaginationContainerStyles>
        <EquipmentPagination
          gearLink={gearLink}
          queryString={queryString}
          page={page || 1}
        />
      </PaginationContainerStyles>
      <ContentContainerStyles>
        <Gearsets page={page || 1} />
      </ContentContainerStyles>
      <PaginationContainerStyles>
        <EquipmentPagination
          gearLink={gearLink}
          queryString={queryString}
          page={page || 1}
        />
      </PaginationContainerStyles>
    </>
  );
}
