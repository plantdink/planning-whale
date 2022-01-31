import { useRouter } from 'next/dist/client/router';
import ArmourTalents from '../../../components/ArmourTalents';
import GearPagination from '../../../components/GearPagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';
import { PaginationContainerStyles } from '../../../components/styles/PaginationStyles';

export default function ArmourTalentsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Armour Talent';
  const gearLink = '/talents/armourTalents/';

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
        <ArmourTalents page={page || 1} />
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
