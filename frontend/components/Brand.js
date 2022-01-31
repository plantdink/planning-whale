import Link from 'next/link';
import Title from './Title';
import { ListItem } from './styles/ListStyles';

export default function Brand({ brand }) {
  return (
    <ListItem>
      <img />
      <Title>
        <Link href={`/gear/brand/${brand.id}`}>{brand.name}</Link>
      </Title>
    </ListItem>
  );
}
