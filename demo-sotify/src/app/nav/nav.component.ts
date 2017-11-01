import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {IArtist} from '../interface/artist.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output('artist') artist = new EventEmitter<String>();
  artists: IArtist[];

  constructor(
    private service: SpotifyService) {}

  ngOnInit() {
  }

  search(keySearch: string) {
    // if (this.router.url !== '/home') {
    //   this.artist.emit(keySearch);
    //   this.router.navigate(['home']);
    // }else {
    //   this.artist.emit(keySearch);
    // }
    this.artist.emit(keySearch);
  }
}
