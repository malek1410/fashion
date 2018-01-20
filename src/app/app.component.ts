// libraries
import { Component } from '@angular/core';
import {ProductService} from "./products/product.service";
// decorator
@Component ({

selector : 'pm-root',
templateUrl: './app.component.html', 
styleUrls:['./app.component.css'],
providers:[ProductService]
})
// class
export class AppComponent{ 
pageTitle: string = 'this is my first Dynamic website';
}