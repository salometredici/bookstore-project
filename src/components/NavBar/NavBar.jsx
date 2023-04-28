import Brand from "./Brand/Brand";
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import SearchBar from "./SearchBar/SearchBar";
import CartWidget from "./CartWidget/CartWidget"

export default function NavBar() {
    return (
        <nav className="navbar-container">
            <Brand />
            <NavBarMenu />
            <SearchBar />
            <CartWidget />
        </nav>
    );
}
