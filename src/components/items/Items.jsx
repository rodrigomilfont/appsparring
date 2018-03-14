import React from 'react';
import { Link } from 'react-router-dom';
import ItemsFetch from '../../containers/item/Items';

const Items = props => {
  console.log('Items: ', props);
  return (
    <div className="grid">
      <ItemsFetch {...props} />
    </div>
  );
};

export default Items;
