import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next-head';
import Link from 'next/link';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

export const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
        _all${}Meta {
            count
        }
    }
`;

export default function Pagination({ page }) {
    const { data, error, loading } = useQuery(PAGINATION_QUERY);
    if (loading) return 'Loading....';
    if (error) return <DisplayError error={error} />;
    const { count } = data._all${ }Meta;
    const pageCount = Math.ceil(count / perPage);
    return (
        <>
        <Head>
            <title>
                Agent Field Manual - Page {page} of {pageCount}
            </title>
        </Head>
        <Link href={`/weapons/assaultRifles/${page + 1}`}>
                <a aria-disabled={page <= 1}>Prev</a>
            </Link>
            <p>
                Page {page} of {pageCount}
            </p>
            <p>{count} Items Total</p>
            <Link>
                <a aria-disabled={page >= pageCount}>Next</a>
            </Link>
        </>
    )

}