import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header>
      <nav>
          <Link href="/">
          <Image src={logo} className="magic-logo" alt="Our Logo" height={165}/>
          </Link>
          <div className="nav-links">
          {/* <Link href="/">Home</Link> <> </>
          <> </> */}
          <Link href="/wands">Wands</Link>
          <> </>
          <Link href="/spells">Spells</Link>
          <> </>
          <Link href="/customers">Customers</Link>
          <> </>
          <Link href="/orders">Orders</Link>
          <> </>
          <Link href="/orderItems">Order Items</Link>
          </div>
        </nav>
    </header>
  );
}

export default Header;