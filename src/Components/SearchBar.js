
function SearchBar({ searchText, onSearchTextChange }) {
    return (
        <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => onSearchTextChange(e.target.value)}
        >
        </input>
    )
}

export default SearchBar;