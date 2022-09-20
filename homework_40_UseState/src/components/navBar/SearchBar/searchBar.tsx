import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import '../SearchBar/searchBarStyle.css';
import iconSearch from '../../../images/icons/search.svg';

export function SearchBar() {

    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;

        const query = form.search.value;

        setSearchParams({ post: query })
    }

    return (
        <form className='inputSearchNavBar' autoComplete='on'
            onSubmit={handleSubmit}
        >
            <input className='inputSearch'
                type="search"
                name='search'
                placeholder='Search...'
            />
            <button className='buttonSearch' value='Search'  ><img src={iconSearch} alt="#" /></button>
        </form>
    );
}









