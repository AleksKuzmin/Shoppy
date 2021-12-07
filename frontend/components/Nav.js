import Link from 'next/link';
import { useUser } from './User';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  const user = useUser();
  console.log(user);
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <div>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
        </div>
      )}
      {!user && (
        <div>
          <Link href="/signin">Sign In</Link>
        </div>
      )}
    </NavStyles>
  );
}
