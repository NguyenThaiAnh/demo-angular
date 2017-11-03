import { Http , Headers , RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class SpotifyService {
  private key     = 'Bearer';
  private apiUrl  = 'https://api.spotify.com/v1/';
  private headers = new Headers();
  private token = `${this.key} BQAXKwtgmKG8qOs8AREFqH0Nvi-pIKJJE4I95syuT5wbkr910Aduz8HBDdrmxIpYCYRiWXQGyZY3AQS1DVBJGrr-x8N3l5K0Xm5bfQFyXgFevwkPrrVSJOMhd1lNiwC4D-EtzpZsL_VWdCrUdSUUk6M3xMTmSMApd_ljSv6Z854lZrxzeKFuSH9LnWY`;

  constructor(private http: Http) { }

  searchArtist(name: string) {
    const url = `https://api.spotify.com/v1/search?q=${name}&type=artist`;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', this.token);
    const options = new RequestOptions({headers: this.headers});

    return this.http.get(url, options)
      .map(res => res.json())
      .toPromise()
      .catch(err => Promise.reject(err));
  }

  getArtistById(id: string) {
    const url = `https://api.spotify.com/v1/artists/${id}`;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', this.token);
    const options = new RequestOptions({headers: this.headers});

    return this.http.get(url, options)
      .map(res => res.json())
      .toPromise()
      .catch(err => Promise.reject(err));
  }

  getAlbumByArtist(id: string) {
    const url = `https://api.spotify.com/v1/artists/${id}/albums`;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', this.token);

    const options = new RequestOptions({headers: this.headers});
    return this.http.get(url, options)
      .map(res => res.json())
      .toPromise()
      .catch(err => Promise.reject(err));
  }

  getTrackByAlbum(id: string) {
    const url = `https://api.spotify.com/v1/albums/${id}`;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', this.token);

    const options = new RequestOptions({headers: this.headers});
    return this.http.get(url, options)
      .map(res => res.json())
      .toPromise()
      .catch(err => Promise.reject(err));
  }

  getArtistRelative(id: string) {
    const url = `https://api.spotify.com/v1/artists/${id}/related-artists`;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', this.token);

    const options = new RequestOptions({headers: this.headers});
    return this.http.get(url, options)
      .map(res => res.json())
      .toPromise()
      .catch(err => Promise.reject(err));
  }
}
