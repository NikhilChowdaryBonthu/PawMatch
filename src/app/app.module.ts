import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './auth/login/login.component';
import { DogSearchComponent } from './dogs/dog-search/dog-search.component';
import { DogDetailComponent } from './dogs/dog-detail/dog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DogSearchComponent,
    DogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
