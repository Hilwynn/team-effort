import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <h1 className="header_title">
          <a>Team Effort</a>
        </h1>
      </Link>
      <nav className="header_navigation">
        <ul>
          <li>
            <Link href="/spells">
              <a>Spells</a>
            </Link>
          </li>
          <li>
            <Link href="/monsters">
              <a>Monsters</a>
            </Link>
          </li>
          <li>
            <Link href="/classes">
              <a>Classes</a>
            </Link>
          </li>
          <li>
            <Link href="/equipment">
              <a>Equipment</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
