export { fetchSearch } from './search/endpoint';

export function checkStatus(response) {
  console.log('response: ', response);

  console.log('status: ', response.status);

  return response;
}
