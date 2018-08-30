import {Component,OnInit} from 'angular2/core';    //header files to include class and Component
import {IProduct} from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent } from '../shared/star.component';
import {PlanetComponent} from '../shared/planet.component';
import {ProductService} from './product.service';



//metadata
@Component({
    selector: 'pm-product',     //name of the tag
    templateUrl: `app/products/product-list.component.html`,  //back tick for making everything readable in another line
    styleUrls:['app/products/product-list.component.css'],   //can include multiple style files
    pipes: [ProductFilterPipe],
    directives:[StarComponent,PlanetComponent]

})




//class
export class ProductListComponent implements OnInit{

    /* ngOnInit(): void {
        alert('Welcome to e-ShoppE');
    } */


    imageWidth: number = 80;
    imageMargin: number = 20;
    listFilter:string='';
    showImage:boolean = true;
    errorMessage:string;

    imageToggle():void{
        this.showImage=!this.showImage;
    }
    pageTitle: string = "Product List";
    products: IProduct[];
    onRatingClicked(message:string):void{
        alert('Rating was clicked! '+message);
    }

    constructor(private _productService:ProductService)
    {

    }

    ngOnInit():void
    {
        this._productService.getProducts().subscribe(product=>this.products=product,error=>this.errorMessage=error);    //2 call back functions
    }
    
}
