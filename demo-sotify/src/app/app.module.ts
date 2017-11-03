import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { SpotifyService } from './spotify.service';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home',       component: HomeComponent},
  { path: 'albums',     component: AlbumComponent},
  { path: 'artist',       component: ArtistComponent},
  { path: 'artist/:id',   component: ArtistComponent},
  { path: 'albums/:id',    component: AlbumComponent },
  { path: 'contact',      component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    ContactComponent,
    NavComponent,
    HomeComponent,
    CapitalizePipe
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
