import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IAlbum} from '../interface/album.interface';
import {SpotifyService} from '../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  subscription: Subscription;
  artist: any;
  artistRelative: any;
  albums: IAlbum[];
  @Output('search') search = new EventEmitter<String>();
  key: string;
  sortBy: string = 'name';
  sortValue: number = 1;
  artistId: string[] = ['32lVGr0fSRGT6okLKHiP68', '6MddNz1oXWvuY1ZWrsRqQF', '5fJ6x5SuTLWxc9fFZ0ZX6o', '3mibIJiduF0MVLLAvHZAxw', '7l7DZWQaVIS13zFgSf7eb4'];

  constructor(
    private service: SpotifyService,
    private activedRoutes: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.activedRoutes.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.service.getArtistById(params['id']).then((data: any) 	=>  {
            console.log(data);
            this.artist = data;
          });

          this.service.getAlbumByArtist(params['id']).then((data: any) => {
            this.albums = data.items;
          });
        }else {
          const random = Math.floor(Math.random() * 3);
          this.service.getArtistRelative(this.artistId[random]).then((data: any) 	=>  {
            console.log(data.artists);
            this.artistRelative = data.artists;
          });
        }
      }
    );
  }

  // send param key search from nav component to home component
  keySearch(event) {
    this.key = event;
    this.router.navigate(['/home'], { queryParams: { 'keySearch': this.key } });
  }

  //sort
  onSort(col) {
    this.sortBy = col;
    this.sortValue = -this.sortValue;
  }
}
