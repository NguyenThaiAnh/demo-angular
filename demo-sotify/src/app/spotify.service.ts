import { Http , Headers , RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class SpotifyService {
  private key     = 'Bearer';
  private apiUrl  = 'https://api.spotify.com/v1/';
  private headers = new Headers();
  private token = `${this.key} BQCW4Rvq-F6ZjD1Whr01pa1b_Nm8uKg3vPULm3KIPbJK3m0rkDxcqhPRbyk56WXSLCdRdMib1rsg-1RnR-Vrh2IATghQKh6T_KkszJ6o1Q-OTVY3szgTxPyV33FaGsNtS8DT_b7bAhchIRhFVRfa7uk0-JkSN7is3KGFBItw4t0RduBYKyLdklkq0E8`;

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
}
