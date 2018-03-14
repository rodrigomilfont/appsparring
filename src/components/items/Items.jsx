import React from 'react';
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
