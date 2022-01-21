import { gql, useQuery } from '@apollo/client';
import ItemListStyles from './styles/ItemListStyles';
import Brand from './Brand';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

const ALL_BRANDS_QUERY = gql`
  query ALL_BRANDS_QUERY($skip: Int = 0, $first: Int) {
    allBrands(first: $first, skip: $skip) {
      id
      name
    }
  }
`;
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
    <div>
      <ItemListStyles>
        {data.allBrands.map((brand) => (
          <Brand key={brand.id} brand={brand} />
        ))}
      </ItemListStyles>
    </div>
  );
}
