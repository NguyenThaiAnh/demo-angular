import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SpotifyService} from '../services/spotify.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any;
  albums: any;
  subscription: Subscription;
  key: string;
  sortBy: string = 'name';
  sortValue: number = 1;
  artistId: string[] = ['4AK6F7OLvEQ5QYCBNiQWHq', '6eUKZXaKkcviH0Ku9w2n3V', '6VuMaDnrHyPL1p4EHjYLi7', '3BmGtnKgCSGYIUhmivXKWX', '1KCSPY1glIKqW2TotWuXOR', '4nDoRrQiYLoBzwC5BhVJzF'];

  constructor(
    private service: SpotifyService,
    private activedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.subscription = this.activedRoute.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          // get all tracks of album
          this.service.getTrackByAlbum(params['id']).then((data: any) => {
            this.album = data;
            // console.log(data);
          });
        } else {
          //random album to get album HOT
          const random = Math.floor(Math.random() * 6);
          this.service.getAlbumByArtist(this.artistId[random]).then((data: any) 	=>  {
            console.log(data.items);
            this.albums = data.items;
          });
        }
      }
    );
  }


  // send param key search from nav component to home component
  keySearch(event) {
    this.key = event;
    this.router.navigate(['/home'], {queryParams: {'keySearch': this.key}});
  }

  //sort name
  onSort(col) {
    this.sortBy = col;
    this.sortValue = -this.sortValue;
  }

}
