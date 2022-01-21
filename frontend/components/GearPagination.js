import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';
import PaginationStyles from './styles/PaginationStyles';

export const BRAND_PAGINATION_QUERY = gql`
  query BRAND_PAGINATION_QUERY {
    _allBrandsMeta {
      count
    }
  }
`;

export const GEARSET_PAGINATION_QUERY = gql`
  query GEARSET_PAGINATION_QUERY {
    _allGearsetsMeta {
      count
    }
  }
`;

export const NAMED_ITEMS_PAGINATION_QUERY = gql`
  query NAMED_ITEMS_PAGINATION_QUERY {
    namedCount: _allArmourTypesMeta(where: { isNamed: "YES" }) {
      count
    }
  }
`;

export const ARMOUR_TYPES_PAGINATION_QUERY = gql`
  query ARMOUR_TYPES_PAGINATION_QUERY {
    allCount: _allArmourTypesMeta {
      count
    }
  }
`;

export const WEAPON_TALENT_PAGINATION_QUERY = gql`
  query WEAPON_TALENT_PAGINATION_QUERY {
    _allWeaponTalentsMeta {
      count
    }
  }
`;

export const ARMOUR_TALENT_PAGINATION_QUERY = gql`
  query ARMOUR_TALENT_PAGINATION_QUERY {
    _allArmourTalentsMeta {
      count
    }
  }
`;

export const EXOTIC_ARMOUR_PIECES_PAGINATION_QUERY = gql`
  query EXOTIC_ARMOUR_PIECES_PAGINATION_QUERY {
    _allExoticArmourPiecesMeta {
      count
    }
  }
`;

export default function EquipmentPagination({ page, queryString, gearLink }) {
  let query = null;
  if (queryString === 'Brand') query = BRAND_PAGINATION_QUERY;
  if (queryString === 'Gearset') query = GEARSET_PAGINATION_QUERY;
  if (queryString === 'Named Armour Piece')
    query = NAMED_ITEMS_PAGINATION_QUERY;
  if (queryString === 'Armour Type') query = ARMOUR_TYPES_PAGINATION_QUERY;
  if (queryString === 'Weapon Talent') query = WEAPON_TALENT_PAGINATION_QUERY;
  if (queryString === 'Armour Talent') query = ARMOUR_TALENT_PAGINATION_QUERY;
  if (queryString === 'Exotic Armour Piece')
    query = EXOTIC_ARMOUR_PIECES_PAGINATION_QUERY;

  const { data, error, loading } = useQuery(query);

  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;

  const { count } =
    data._allBrandsMeta ||
    data._allGearsetsMeta ||
    data.namedCount ||
    data.allCount ||
    data._allWeaponTalentsMeta ||
    data._allArmourTalentsMeta ||
    data._allExoticArmourPiecesMeta;

  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>
          {`Agent Field Manual - ${queryString}s Page ${page} of ${pageCount}`}
        </title>
      </Head>
      <Link href={`${gearLink}${page - 1}`} passHref>
        <a aria-disabled={page <= 1}>Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{`${count} ${queryString}s Total`}</p>
      <Link href={`${gearLink}${page + 1}`} passHref>
        <a aria-disabled={page >= pageCount}>Next</a>
      </Link>
    </PaginationStyles>
  );
}
