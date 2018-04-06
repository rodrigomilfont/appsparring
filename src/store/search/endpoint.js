import axios from 'axios';

export const fetchSearch = searchTerm =>
  axios({
    method: 'get',
    url: `https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`,
    headers: { 'X-Coma-With': 'XMLHttpRequest' },
  });
