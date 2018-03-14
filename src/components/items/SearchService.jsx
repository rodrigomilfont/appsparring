/* eslint class-methods-use-this: ["error", { "exceptMethods": ["doSearch"] }] */

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

class SearchService {
  constructor() {
    this.searchTerm = new Subject();
  }

  search(term) {
    this.searchTerm.next(term.value);
  }

  doSearch(term) {
    const promise = fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${term}`,
    ).then(response => response.json());

    return Observable.fromPromise(promise);
  }

  getResults() {
    return this.searchTerm
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(
        term => (term ? this.doSearch(term.trim()) : Observable.of([])),
      )
      .catch(error => {
        /* eslint no-console: ["error", { allow: [ 'error' ] }] */
        console.error(error);
        return Observable.of([]);
      });
  }
}

export default SearchService;
