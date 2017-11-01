import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artists: any;
  key: string;

  constructor(private service: SpotifyService,
              public router: Router,
              private activated: ActivatedRoute) {
  }

  ngOnInit() {
    this.activated
      .queryParams
      .subscribe(params => {
        this.key = params['keySearch'];
      });
    console.log(this.key);
    if (this.key) {
      this.service.searchArtist(this.key)
        .then(res => {
          this.artists = res.artists.items;
          console.log(res.artists.items);
        })
        .catch(err => console.log(err));
    }
  }

  keySearch(event) {
    this.service.searchArtist(event)
      .then(res => {
        this.artists = res.artists.items;
        console.log(res.artists.items);
      })
      .catch(err => console.log(err));
  }
}
