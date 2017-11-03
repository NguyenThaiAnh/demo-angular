import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(artists: any[], sortBy: string,  sortValue: number): any {
    if (sortBy === 'follower') {
      artists.sort((artist_a, artist_b) => {
        if      (artist_a.followers.total > artist_b.followers.total) return sortValue;
        else if (artist_a.followers.total < artist_b.followers.total) return -sortValue;
        else return 0;
      });
    }
    if (sortBy === 'name') {
      artists.sort((artist_a, artist_b) => {
        if      (artist_a.name > artist_b.name) return sortValue;
        else if (artist_a.name < artist_b.name) return -sortValue;
        else return 0;
      });
    }
    return artists;
  }

}
