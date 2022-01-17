import Link from 'next/link';
import Title from './Title';

export default function ExoticArmourPiece({ exoticArmourPiece }) {
  return (
    <div>
      <Title>
        <Link href={`/exotics/exoticArmourPiece/${exoticArmourPiece.id}`}>
          {exoticArmourPiece.name}
        </Link>
      </Title>
    </div>
  );
}
