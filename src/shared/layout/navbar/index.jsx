import { useState } from 'react';
import { SearchInput } from "../../../features/search/components/search-input";
import CartBadge from "../../../features/badge/components/cart-badge";
import { appRoutes } from "../../../routes";
import { useNavigate } from "react-router";
import "./style.css";

export function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="top-nav">
      <nav>
        <div className="navigate-pages">
          <button className="navigate-pages__img" onClick={() => navigate(appRoutes.home)}>
            <img src="/images/fitfuel-logo.png" alt="logo" />
          </button>

          {/* mobile menu button (visible on small screens) */}
          <button
            className="navigate-pages__menu-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <img src="/src/assets/images/menu-svgrepo-com.svg" alt="menu" width="22" />
          </button>

          {/* navigation links: hidden on mobile, visible on tablet+ or when menuOpen on mobile */}
          <ul className={`navigate-pages__subList ${menuOpen ? 'open' : ''}`}>
            <li>
              <button onClick={() => { setMenuOpen(false); navigate(appRoutes.home); }}>Home</button>
            </li>
            <li>
              <button onClick={() => { setMenuOpen(false); navigate(appRoutes.products.new); }}>Shop</button>
            </li>
            <li>
              <button onClick={() => { setMenuOpen(false); navigate(appRoutes.featured); }}>Featured</button>
            </li>
            <li>
              <button onClick={() => { setMenuOpen(false); navigate(`${appRoutes.home}#recommended`); }}>Recommended</button>
            </li>
          </ul>
        </div>

        {/* search bar */}
        <SearchInput />

        <div className="nav-icons">
          <button type="button" className="nav-icons__fav" onClick={() => navigate(`${appRoutes.home}#favorites`)}>
            <img
              className="nav-icons__fav-img"
              src="/src/assets/images/favorite-svgrepo-com.svg"
              alt="favorite icon"
              width="20"
            />
          </button>
          <button type="button" className="nav-icons__ptofile" onClick={() => navigate(appRoutes.auth.login)}>
            <img
              className="nav-icons__profile-img"
              src="/src/assets/images/profile-1341-svgrepo-com.svg"
              alt="profile icon"
              width="20"
            />
          </button>
          <CartBadge />
        </div>
      </nav>
    </header>
  );
}
