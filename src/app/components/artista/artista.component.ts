import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loadingArtist: boolean;
  topTracks: any = [];

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {

    this.loadingArtist = true;

    this.route.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtista(id)
      .subscribe(artista => {
        this.artista = artista;
        this.loadingArtist = false;
      });

  }

  getTopTracks(id: string) {
    this.loadingArtist = true;
    this.spotify.getTopTracks(id)
      .subscribe(tracks => {
        this.topTracks = tracks;
      });

  }

}
