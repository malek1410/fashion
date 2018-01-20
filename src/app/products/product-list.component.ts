import{Component, OnInit} from'@angular/core';
import{Iproduct} from './product';
import {ProductService} from "./product.service";

@Component({
templateUrl:'./product-list.component.html',
styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  
filteredProducts:Iproduct[];
_listFilter: any;
pageTitle:string ='product list ';
imageWidth:number=100;
imageMargin:number=2;
showImage:boolean=false;
errorMessage: string; 
products :Iproduct[]=[];
sortField:string="Traditional";
sortFields: Array<string>= [
    'All', 'Traditional','Occasional','Casual'
];
constructor(private _productService: ProductService){

}



get listFilter(): string{
return this._listFilter;
}
set listFilter(value:string){
this._listFilter=value;
this.filteredProducts=this.listFilter? this.performFilter(this.listFilter):this.products;
}

onRatingClicked(message: string): void{
    this.pageTitle='Product List:'+ message;
}
performFilter(filterby:string): Iproduct[]{
    filterby = filterby.toLocaleLowerCase();
    return this.products.filter((product:Iproduct)=>
    product.productName.toLocaleLowerCase().indexOf(filterby)!== -1);

}
toggleImage (){
    this.showImage=!this.showImage;
}

ngOnInit(): void{
    this._productService.getProducts()
    .subscribe(products=> {
        this.products=products;
        this.filteredProducts= this.products;
    },
    error => this.errorMessage = <any>error);
}
}