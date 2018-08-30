import {Injectable} from 'angular2/core';
import {Http,Response} from 'angular2/http';
import {IProduct} from './product';
import {Observable} from 'rxjs/Observable'; //to store data in observable kind of object


@Injectable()

export class ProductService 
{
    private _productUrl ="api/products/products.json";

    constructor(private _http:Http)
    {

    }

    getProducts(): Observable<IProduct[]>   //return type is IProduct array which is observable object
    {
        return this._http.get(this._productUrl).map((response:Response)=><IProduct[]>response.json())
        .do(data => console.log("All:" + JSON.stringify(data))).catch(this.handleError);
    }

    private handleError(error:Response)
    {
        console.error(error);
    }
}