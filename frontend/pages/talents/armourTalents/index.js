import { useRouter } from 'next/dist/client/router';
import ArmourTalents from '../../../components/ArmourTalents';
import GearPagination, {
  PaginationContainerStyles,
} from '../../../components/Pagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';

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
