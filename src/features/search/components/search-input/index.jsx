import { debounce } from '../../../../shared/utilities/debounce';
import { useSearchParams } from 'react-router';
import { useState } from 'react';
import "./style.css";

export function SearchInput() {
      const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('q') ?? '';
    const [inputValue, setInputValue] = useState(() => searchQuery);

    const updateQueryStringHandler = (query) => {
        const params = {
            ...Object.fromEntries(searchParams.entries())
        };
        params.q = query;
        setSearchParams(params);
    }


  const handleInputChange = async (e) => {
    const value = e.target.value;
 setInputValue(value);
        debounce(() => updateQueryStringHandler(value), 2000)()

  };

  return (
      <div className="searchbar">
        <button id="button-click" className="search-button">
          <img
          className="searchbar-img"
          src="/public/images/icones/search-alt-1-svgrepo-com.svg"
          alt="search icon"
          width="17"
        />
        </button>
        <input
          className="searchbar-input"
          id="searchbar-input"
          placeholder="Search product..."
          type="text"
          value={!!inputValue && !searchQuery ? '' : inputValue} 
          onChange={handleInputChange}
        />
      </div>
  );
}
