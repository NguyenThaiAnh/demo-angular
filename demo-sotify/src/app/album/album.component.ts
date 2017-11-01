import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
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
