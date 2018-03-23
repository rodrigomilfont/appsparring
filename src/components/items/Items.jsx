import React from 'react';
import ItemsFetch from '../../containers/item/Items';

const Items = props => (
  <div className="grid">
    <ItemsFetch {...props} />
  </div>
);

export default Items;
