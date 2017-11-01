import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Params, Router} from '@angular/router';
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
  artistName: string = 'taylor';
  @Output('search') search = new EventEmitter<String>();
  key: string;

  constructor(
    private service: SpotifyService,
    private activedRoutes: ActivatedRoute,
    public router: Router) { }

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

  keySearch(event) {
    // console.log(event);
    this.key = event;
    // this.router.navigate(['home'], { queryParams: {'keySearch': this.key} });
    this.router.navigate(['/home'], { queryParams: { 'keySearch': this.key } });
    // this.search.emit(event);
  }

}
