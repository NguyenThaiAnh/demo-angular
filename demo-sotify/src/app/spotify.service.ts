import { Http , Headers , RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class SpotifyService {
  private key     = 'Bearer';
  private apiUrl  = 'https://api.spotify.com/v1/';
  private headers = new Headers();
  private token = `${this.key} BQA4IkufoAkcYWV-TWUckizBncn6yoHi0AEr3WU1-oRq4wghHb4m4cWPXC3F1cBSVezBZvLUXRsAhPIoNl8Y_flSAy5PKHg0WQjBPDRfHkxk7TXJ8JEawdR6jNuEchti_iZILqPWr3RuTU5VY0sff2uuYsCT2zR9NiFdJTDXeZQxoELb33G7MzMDg4Q`;

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
}
