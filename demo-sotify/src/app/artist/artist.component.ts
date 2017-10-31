import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Params} from '@angular/router';
import {IArtist} from '../interface/artist.interface';
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

  constructor(
    private service: SpotifyService,
    private activedRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activedRoutes.params.subscribe(
      (params: Params) => {
        this.service.getArtistById(params['id']).then((data: any) 	=>  {
          console.log(data);
          this.artist = data;
        });

        this.service.getAlbumByArtist(params['id']).then((data: any) => {
          this.albums = data.items;
          // console.log(data);
        });
      }
    );
  }

}
