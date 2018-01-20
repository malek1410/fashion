export interface Iproduct {
    productId: number; 
    pType:string;
    productName: string;
    productCode: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
    
}
/*export class Product  implements Iproduct{

    constructor( productId: number, 
        productName: string,
        productCode: string,
        releaseDate: string,
        price: number,
        description: string,
        starRating: number,
        imageUrl: string){

        }
calculateDiscount(precent :number ) :number
{
    return this.price - (this.price * percent / 100);
}
}*/