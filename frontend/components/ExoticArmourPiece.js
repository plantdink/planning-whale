import Link from 'next/link';
import Title from './Title';
import { ListItem } from './styles/ListStyles';

export default function ExoticArmourPiece({ exoticArmourPiece }) {
  return (
    <ListItem>
      <img />
      <Title>
        <Link href={`/exotics/exoticArmourPiece/${exoticArmourPiece.id}`}>
          {exoticArmourPiece.name}
        </Link>
      </Title>
    </ListItem>
  );
}
