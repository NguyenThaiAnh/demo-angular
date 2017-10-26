import { IAlbum } from './album.interface';

export class IArtist {
  id:     string;
  name:   string;
  genres: string;
  album:  IAlbum[];
}
