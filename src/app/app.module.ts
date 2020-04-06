import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { _MatMenuDirectivesModule, MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarMenuComponent } from './component/top-bar-menu/top-bar-menu.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarMenuComponent,
    TopBarComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
