import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AsideModule } from 'ng2-aside';
import { ContentComponent } from './content/content.component';
import { VariablesService } from './variables.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [VariablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
