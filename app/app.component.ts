import {Component} from 'angular2/core';    //header files to include class and Component
import {ProductListComponent} from './products/product-list.component'; 
import {ProductService} from './products/product.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

//metadata
@Component({
    selector: 'pm-app',     //name of the tag
    template: `{{pageTitle}}
    <hr>
    <pm-product></pm-product>`, //inserted another tag inside the app component
    directives: [ProductListComponent],      //tells that this component can be used in the angularJS
    providers:[ProductService,HTTP_PROVIDERS]

})

//class
export class AppComponent {
    

}
