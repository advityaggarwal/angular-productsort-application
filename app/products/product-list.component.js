System.register(['angular2/core', './product-filter.pipe', '../shared/star.component', '../shared/planet.component', './product.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_filter_pipe_1, star_component_1, planet_component_1, product_service_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_filter_pipe_1_1) {
                product_filter_pipe_1 = product_filter_pipe_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (planet_component_1_1) {
                planet_component_1 = planet_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            //metadata
            ProductListComponent = (function () {
                function ProductListComponent(_productService) {
                    this._productService = _productService;
                    /* ngOnInit(): void {
                        alert('Welcome to e-ShoppE');
                    } */
                    this.imageWidth = 80;
                    this.imageMargin = 20;
                    this.listFilter = '';
                    this.showImage = true;
                    this.pageTitle = "Product List";
                }
                ProductListComponent.prototype.imageToggle = function () {
                    this.showImage = !this.showImage;
                };
                ProductListComponent.prototype.onRatingClicked = function (message) {
                    alert('Rating was clicked! ' + message);
                };
                ProductListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._productService.getProducts().subscribe(function (product) { return _this.products = product; }, function (error) { return _this.errorMessage = error; });
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-product',
                        templateUrl: "app/products/product-list.component.html",
                        styleUrls: ['app/products/product-list.component.css'],
                        pipes: [product_filter_pipe_1.ProductFilterPipe],
                        directives: [star_component_1.StarComponent, planet_component_1.PlanetComponent]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map