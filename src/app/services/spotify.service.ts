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
      'Authorization': 'Bearer BQBuWK5Bp_tHRHpk8sPnDxRQEQWUZPtKSUbVS-rGDBTXmYuQTOrveKi_qIC4rHpXTH-GwZMe4zN22dKya_s'
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
