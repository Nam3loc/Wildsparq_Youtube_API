import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ContentViewComponent } from './components/content-view/content-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlaylistComponent,
    ContentViewComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
