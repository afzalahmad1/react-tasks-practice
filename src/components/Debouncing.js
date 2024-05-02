import React, { useState } from 'react';

const Debouncing = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const debouncedSearch = debounce((term) => {
    console.log(term);
  }, 500);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  return (
    <div>
      <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      </div>
      {searchTerm && <p>{searchTerm}</p>}
    </div>
  );
};

export default Debouncing;
