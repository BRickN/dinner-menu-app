import { useState } from 'react';

import Navbar from './Navbar';
import DinnerList from './DinnerList';
import SearchBar from './SearchBar';

import '../Styles/App.css';

function App() {
    const [searchText, setSearchText] = useState('')

    return (
        <div className="App">
            <DinnerList searchText={searchText} />
            <SearchBar
                searchText={searchText}
                onSearchTextChange={setSearchText} />
            <Navbar />
        </div>
    );
}

export default App;
