import { Link } from 'preact-router/match';

const Header = () => (
  <header>
    <a href="/">
      <img alt="Preact Logo" height="32" width="32" />
      <h1>Preact CLI</h1>
    </a>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/profile">Me</Link>
      <Link href="/profile/john">John</Link>
    </nav>
  </header>
);

export default Header;
