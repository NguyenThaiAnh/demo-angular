import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {IArtist} from '../interface/artist.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: IArtist[];
  constructor(private service: SpotifyService) { }

  ngOnInit() {}

  loadArtists(searchValue: string) {
    this.service.searchArtist(searchValue)
      .then(res => {
        this.artists = res.artists.items;
        console.log(res.artists.items);
      })
      .catch(err => console.log(err));
  }
}
