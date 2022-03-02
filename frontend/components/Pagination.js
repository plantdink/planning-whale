import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import { WEAPON_PAGINATION_QUERY } from '../queries/PaginationQueries';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';
import { PaginationStyles } from './styles/PaginationStyles';

export default function Pagination({ page, queryString, weaponLink }) {
  const isExotic = queryString !== 'Exotic Weapon' ? null : 'YES';
  const isNamed = queryString !== 'Named Weapon' ? null : 'YES';

  let weaponClass = queryString.toUpperCase();
  if (queryString === 'Exotic Weapon') weaponClass = null;
  if (queryString === 'Named Weapon') weaponClass = null;

  const { data, error, loading } = useQuery(WEAPON_PAGINATION_QUERY, {
    variables: {
      class: weaponClass,
      isExotic,
      isNamed,
    },
  });

  if (loading) return 'Loading....';
  if (error) return <DisplayError error={error} />;

  const { count } = data._allWeaponsMeta;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>
          {`Agent Field Manual - ${queryString}s Page ${page} of ${pageCount}`}
        </title>
      </Head>
      <Link href={`${weaponLink}${page - 1}`} passHref>
        <a aria-disabled={page <= 1}>Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{`${count} ${queryString}s Total`}</p>
      <Link href={`${weaponLink}${page + 1}`} passHref>
        <a aria-disabled={page >= pageCount}>Next</a>
      </Link>
    </PaginationStyles>
  );
}
