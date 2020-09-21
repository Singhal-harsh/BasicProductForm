import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent} from './components/sample.component';
import { ChildComponent} from './components/child.component';
import { ProductComponent } from './components/product.component';
//import { ProductService} from './services/product.service';
import { HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import {RouterModule, Router, Routes} from'@angular/router';
import { FirstComponent } from './components/first.component';
import { SecondComponent } from './components/second.component';
import { EditComponent } from './components/edit.component';
import { combineLatest } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent, SampleComponent, ChildComponent, ProductComponent , FirstComponent, SecondComponent, EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: 'first/:title', component : FirstComponent},
        { path: 'second', component : SecondComponent},
        { path: 'edit', component : EditComponent},
        { path: '', component : ProductComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
