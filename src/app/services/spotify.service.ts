import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases() {

    const header = new HttpHeaders( {
      'Authorization': 'Bearer BQBpcTTj-TWaR-fZNcw0NIVLW67af8OsNw1gJ-KWKqaI9dC8_rH1FY354FYyeS--RCupo7onW8wrqEy_5Fw'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: header })
      .subscribe( data => {
        console.log(data);
      });
  }

}
