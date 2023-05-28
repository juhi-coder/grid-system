import React, { useState } from 'react';

const FilterForm = ({ onFilter }) => {
  const [name, setName] = useState('');
  const [totalMarks, setTotalMarks] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({ name, totalMarks });
  };

  return (
    <form onSubmit={handleFilter}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Total Marks"
        value={totalMarks}
        onChange={(e) => setTotalMarks(e.target.value)}
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterForm;
