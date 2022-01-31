import { useRouter } from 'next/dist/client/router';
import WeaponTalents from '../../../components/WeaponTalents';
import GearPagination from '../../../components/GearPagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';
import { PaginationContainerStyles } from '../../../components/styles/PaginationStyles';

export default function WeaponTalentsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Weapon Talent';
  const gearLink = '/talents/weaponTalents';

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
        <WeaponTalents page={page || 1} />
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
