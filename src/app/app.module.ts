import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { SortByPipe } from './shared/sort-by.pipe';
import { LocationComponent } from './location/location.component';
import { CarouselModule }  from "angular4-carousel";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    SortByPipe,
    LocationComponent 
    ],
    imports: [
    BrowserModule,CarouselModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'location', component: LocationComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo:'welcome', pathMatch:'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
