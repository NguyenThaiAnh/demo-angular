import { Http , Headers , RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class SpotifyService {
  private key     = 'Bearer';
  private apiUrl  = 'https://api.spotify.com/v1/';
  private headers = new Headers();
  private token = `${this.key} BQDlo5D1SNI3ck5oYpRrRX2Qn_XA7wBDx49I3ef-2ZyVsSKvrrBawfrcz-YCkewUnRVU3vZUHeP0H7TuK2eaXthng6Plamr9CMmneAk-SKE7qu0jY9JMgOIibXzdv86qo-5rD_ywhD4tY5HZMzFkUaNA7l3-a7YKEEIRmfhbt-2PxETDkbDhlc2fznI`;

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
