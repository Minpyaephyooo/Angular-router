import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NaviComponent } from './navi/navi.component';
import { BmserviceService } from './sysgen/bmservice.service';
import { TestoneComponent } from './testone/testone.component';
import { TesttwoComponent } from './testtwo/testtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NaviComponent,
    TestoneComponent,
    TesttwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : 'navi',
        component : NaviComponent
      },
      {
        path : '',
        component : HomeComponent
      },
      {
        path : 'about',
        component : AboutComponent
      }
    ])
  ],
  providers: [BmserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
