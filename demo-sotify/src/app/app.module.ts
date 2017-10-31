import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from './spotify.service';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { EventComponent } from './event/event.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path: 'search',       component: SearchComponent},
  { path: 'playlist',     component: PlaylistComponent},
  { path: 'artist',       component: ArtistComponent},
  { path: 'artist/:id',   component: ArtistComponent},
  { path: 'album',        component: AlbumComponent},
  { path: 'album/:id',    component: AlbumComponent },
  { path: 'blogevent',    component: EventComponent},
  { path: 'contact',      component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    SearchComponent,
    PlaylistComponent,
    EventComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
