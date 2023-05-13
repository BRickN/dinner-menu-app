import '../Styles/NavbarItem.css'

function NavbarItem({ icon, url }) {
    return (
        <div className="navbar-item">
            <a href={url}>
                <span>{icon}</span>
            </a>
        </div>
    )
}

export default NavbarItem