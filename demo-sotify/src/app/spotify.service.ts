import { Http , Headers , RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class SpotifyService {
  private key     = 'Bearer';
  private apiUrl  = 'https://api.spotify.com/v1/';
  private headers = new Headers();
  private token = `${this.key} BQCLZzlaDDtKjk4sT4gEmqviipX95q13rPkwLD53xLUsgEwB7af3Ju0CvYlFPTPXcj4L3RqjdCl5oxXS3q-dyqGr3_iX-rb6i3Zxkg8fHkJYDuvgZL1bzvSumEquK8EGdKYo-Lot6GRAFI9ePd4-mKHtLL1CEqsE0J7SkF7T3sh3mKlCab2ckCnfB80`;

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
