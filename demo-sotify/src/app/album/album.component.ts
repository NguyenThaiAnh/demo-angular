import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any;
  subscription: Subscription;
  key: string;

  constructor(
    private service: SpotifyService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.activedRoute.params.subscribe(
      (params: Params) => {

        // get all tracks of album
        this.service.getTrackByAlbum(params['id']).then((data: any) 	=>  {
          this.album = data;
          // console.log(data);
        });
      }
    );
  }


  // send param key search from nav component to home component
  keySearch(event) {
    this.key = event;
    this.router.navigate(['/home'], { queryParams: { 'keySearch': this.key } });
  }

}
