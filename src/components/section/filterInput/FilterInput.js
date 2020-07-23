import React from 'react';
import PropTypes from 'prop-types';


const FilterInput = ({ filter, filterInput }) => (
  <div>
    <label>
      Find contacts by name
      <input
        type="text"
        placeholder="Add your search..."
        value={filter}
        name="filter"
        onChange={filterInput}
      />
    </label>
  </div>
);

FilterInput.propTypes = {
  filter: PropTypes.string.isRequired,
  filterInput: PropTypes.elementType.isRequired,
};

export default FilterInput;
