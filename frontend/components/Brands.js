import { useQuery } from '@apollo/client';
import { ALL_BRANDS_QUERY } from '../queries/BrandQueries';
import { ListStyles } from './styles/ListStyles';
import Brand from './Brand';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

export default function Brands({ page }) {
  const { data, error, loading } = useQuery(ALL_BRANDS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading....</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <>
      <ListStyles>
        {data.allBrands.map((brand) => (
          <Brand key={brand.id} brand={brand} />
        ))}
      </ListStyles>
    </>
  );
}
