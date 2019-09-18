import React from 'react'
import PropTypes from 'prop-types';

const SearchItens = props => {
  const { searchs } = props;
  return (
    <ul>
      {searchs.map(item => (
        <li key={item.id}>
          <p>{item.title}</p>
          <img src={item.thumbnail} alt={item.title} />
          <span>
            {new Date(item.stop_time).toLocaleTimeString('pt-BR', {
              timeZone: 'UTC',
            })}
          </span>
        </li>
      ))}
    </ul>
  );
};

SearchItens.propTypes = {
  searchs: PropTypes.arrayOf(PropTypes.object),
};

SearchItens.defaultProps = {
  searchs: [],
};

export default SearchItens;
