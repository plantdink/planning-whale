import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo, HeaderStyles } from './styles/HeaderStyles';
import Nav from './Nav';
import Search from './Search';

// mount Search component on client to stop infinite rerenders
function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
}

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Agent Field Manual</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <ClientOnly>
          <Search />
        </ClientOnly>
      </div>
    </HeaderStyles>
  );
}
