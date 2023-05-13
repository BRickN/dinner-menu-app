import NavbarItem from './NavbarItem';
import '../Styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar-wrapper">
            <NavbarItem icon={"Home"} url={"/home"} />
            <NavbarItem icon={"AddItem"} url={"/add-item"} />
            <NavbarItem icon={"Groceries"} url={"/please-buy-this"} />
        </div>
    )
}

export default Navbar