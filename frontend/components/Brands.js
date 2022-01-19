import { gql, useQuery } from '@apollo/client';
import ItemListStyles from './styles/ItemListStyles';
import Brand from './Brand';
import HeadSEO from './HeadSEO';

const ALL_BRANDS_QUERY = gql`
  query ALL_BRANDS_QUERY {
    allBrands {
      id
      name
    }
  }
`;
export default function Brands() {
  const { data, error, loading } = useQuery(ALL_BRANDS_QUERY);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <HeadSEO seoTag="Brands" />
      <ItemListStyles>
        {data.allBrands.map((brand) => (
          <Brand key={brand.id} brand={brand} />
        ))}
      </ItemListStyles>
    </div>
  );
}
