import axios from 'axios';

export function logger(log) {
  console.log('log: ', log);
}

export const fetchSearch = searchTerm =>
  axios({
    method: 'get',
    url: `https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`,
    headers: { 'X-Coma-With': 'XMLHttpRequest' },
  });

// export default logger;
