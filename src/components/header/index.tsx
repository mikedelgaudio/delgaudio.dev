export interface HeaderProps {
  message: string;
}

function Header(props: HeaderProps) {
  const { message } = props;
  return (
    <h1 class="font-semibold text-2xl mb-8 tracking-tighter">{message}</h1>
  );
}

export default Header;
