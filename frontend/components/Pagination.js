import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';
import PaginationStyles from './styles/PaginationStyles';

export const WEAPON_PAGINATION_QUERY = gql`
  query WEAPON_PAGINATION_QUERY(
    $class: String
    $isExotic: String
    $isNamed: String
  ) {
    _allWeaponsMeta(
      where: {
        OR: [{ class: $class }, { isExotic: $isExotic }, { isNamed: $isNamed }]
      }
    ) {
      count
    }
  }
`;

export default function Pagination({ page, queryString, weaponLink }) {
  const isExotic = queryString !== 'Exotic Weapon' ? null : 'YES';
  const isNamed = queryString !== 'Named Weapon' ? null : 'YES';

  let weaponClass = queryString.toUpperCase();
  if (queryString === 'Exotic Weapon') weaponClass = null;
  if (queryString === 'Named Weapon') weaponClass = null;

  // console.log('Query', queryString);
  // console.log('WeaponClass', weaponClass);
  // console.log('isExotic', isExotic);
  // console.log('isNamed', isNamed);

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
