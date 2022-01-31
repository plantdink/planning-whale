import Link from 'next/link';
import Title from './Title';
import { ListItem } from './styles/ListStyles';

export default function Gearset({ gearset }) {
  return (
    <ListItem>
      <img />
      <Title>
        <Link href={`/gear/gearset/${gearset.id}`}>{gearset.name}</Link>
      </Title>
    </ListItem>
  );
}
