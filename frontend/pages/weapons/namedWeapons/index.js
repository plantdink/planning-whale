import { useRouter } from 'next/dist/client/router';
import NamedWeapons from '../../../components/NamedWeapons';
import Pagination from '../../../components/Pagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';
import { PaginationContainerStyles } from '../../../components/styles/PaginationStyles';

export default function NamedWeaponsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Named Weapon';
  const weaponLink = '/weapons/namedWeapons/';

  return (
    <>
      <PaginationContainerStyles>
        <Pagination
          weaponLink={weaponLink}
          queryString={queryString}
          page={page || 1}
        />
      </PaginationContainerStyles>
      <ContentContainerStyles>
        <NamedWeapons page={page || 1} />
      </ContentContainerStyles>
      <PaginationContainerStyles>
        <Pagination
          weaponLink={weaponLink}
          queryString={queryString}
          page={page || 1}
        />
      </PaginationContainerStyles>
    </>
  );
}
