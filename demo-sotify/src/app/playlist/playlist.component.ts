import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {IAlbum} from '../interface/album.interface';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  album: any;
  subscription: Subscription;
  constructor(
    private service: SpotifyService,
    private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activedRoute.params.subscribe(
      (params: Params) => {
        this.service.getTrackByAlbum(params['id']).then((data: any) 	=>  {
          this.album = data;
          console.log(data);
        });
      }
    );
  }

}
