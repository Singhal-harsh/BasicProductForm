import {Component, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';



@Component({
    selector: 'edit',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './edit.component.html',
    providers: [ ProductService ]
})

export class EditComponent {
    @Input () editprod : any;
    
    public prod : any;
    public activatedRoute: ActivatedRoute;
    public productService : ProductService;
    public products = [];


    constructor(productService : ProductService, activatedRoute: ActivatedRoute)  {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        let observable:Observable<Object> = productService.getProducts();
        observable.subscribe((response:any)=>this.products = response);
    } 

    ngOnInit(){
        this.editprod=this.activatedRoute.snapshot.queryParams;
        //this.id=this.activateRoute.snapshot.params['id'];
        // Object.defineProperty(this.editprod.prototype, 'EditComponent', {
        //     enumerable: true,
        //     configurable: true,
        //     writable : true
        // })

        console.log(this.editprod);
        this.prod = {...this.editprod};

        console.log(this.prod);
        console.log(this.activatedRoute.snapshot);
    }

    onSubmit(prod: any) {
        console.log("!!!!!!!");
        console.log('Submitting product form: ', prod);
        let id = this.editprod.id;
        prod['id']= id;
        // this.products[id-1].name = prod.name;
        // this.products[id-1].quantity = prod.quantity;
        // this.products[id-1].price = prod.price;
        
        console.log(this.products);
        // this.editprod.name = prod.name;
        // this.editprod.quantity = prod.quantity;
        // this.editprod.price = prod.price;
        console.log(prod.id);
        this.productService.updateProduct(id,prod).subscribe(res=>console.log(res));
        window.history.go(-1);

        // console.log('product quantity: ', productFormValue.quantity);
        //console.log(this.prod.name);
        //this.productService.addProduct(productFormValue);
        //this.productService.addProduct(productFormValue).subscribe(prodob => this.products.push(prodob));
    }

    onCancellation() {
        window.history.go(-1);
    }

    // onChangeProduct(prod : any) {
    //     console.log("#######");
    //     console.log(prod.id);
    //     console.log(this.products[prod.id-1]);
    // }

}
