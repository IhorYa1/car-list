import React, { useState, useEffect, createContext, useContext } from 'react'
import { SEARCH_TERM } from '../../../lib/constants';
import './search.css'

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
    };

    useEffect(() => {
        const term = localStorage.getItem(SEARCH_TERM);
        if (term) {
            setSearchTerm(term);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SEARCH_TERM, searchTerm);
    }, [searchTerm]);

    return (
        <SearchContext.Provider value={{ searchTerm, handleSearch }}>
            {children}
        </SearchContext.Provider>
    )
}

const Search = () => {
    const { searchTerm, handleSearch } = useContext(SearchContext);

    return (
        <input
            className="input-text"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
        />
    );
}

export { SearchProvider, Search, SearchContext };