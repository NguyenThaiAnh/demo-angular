import { Http , Headers , RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class SpotifyService {
  private key     = 'Bearer';
  private apiUrl  = 'https://api.spotify.com/v1/';
  private headers = new Headers();
  private token = `${this.key} BQC-Z6BRkYD5OmzRa4pVSkJRCXN-Cx8_JkYBK11kzn3mMaUem0Jmw41SrF1gmmk-Dwq_Y_kmGYU9BSupBUT0h270iCqrP0xSI4UN_OUuVBGDbpt4JImEhkKvjBBli7YjblY6jRFNBH7-_wbTY2y-l5VeBDrRRLY7Su9jKIlJqBT6We4Rkz0_RPbvxs8`;

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
