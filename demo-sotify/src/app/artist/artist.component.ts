import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IAlbum} from '../interface/album.interface';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  subscription: Subscription;
  artist: any;
  albums: IAlbum[];
  artistName = 'taylor';
  @Output('search') search = new EventEmitter<String>();
  key: string;

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
            // console.log(data);
          });
        }else {
          this.service.searchArtist(this.artistName);
        }
      }
    );
  }

  // send param key search from nav component to home component
  keySearch(event) {
    this.key = event;
    this.router.navigate(['/home'], { queryParams: { 'keySearch': this.key } });
  }

}
