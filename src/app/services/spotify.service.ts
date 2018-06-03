import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBQ9lyegNJhzBEjcnw6fgs2AWXS19r-py6RRu__LIu1oAxCPLWeUkVgW3RIYfZLRMRNZlyglWSd2_k54Jg'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));

  }

  getArtista(termino: string) {


    return this.getQuery(`search?q=${ termino }&type=artist&limit=10&offset=5`)
      .pipe(map(data => data['artists'].items));

  }

}
