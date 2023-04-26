import { NgModule } from '@angular/core';
import { KvinZComponent } from './kvin-z.component';
import { MusicComponent } from './components/music/music.component';



@NgModule({
  declarations: [
    KvinZComponent,
    MusicComponent
  ],
  imports: [
  ],
  exports: [
    KvinZComponent
  ]
})
export class KvinZModule { }
