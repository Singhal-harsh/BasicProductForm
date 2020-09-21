import {Component, EventEmitter} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Observable} from 'rxjs';
import {EditComponent } from './edit.component';
import {ActivatedRoute , NavigationExtras, Router} from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
    selector: 'product',
    template: `<form #productForm="ngForm" (ngSubmit)="onSubmit(productForm.value)" novalidate>
    <div class = "container">
        <div class="form-group">
            
            <input type="text" name="name" required class="form-control" placeholder=“Name” #nameModelRef="ngModel" ngModel>
            <div [hidden]="nameModelRef.valid || nameModelRef.pristine" class="alert alert-danger">
                Please enter Name of the Product!
            </div>
        </div>    
        <div class="form-group">
            <input type="number" name="quantity" required class="form-control" placeholder=“Quantity” #quantityModelRef="ngModel" ngModel>
            <div [hidden]="quantityModelRef.valid || quantityModelRef.pristine" class="alert alert-danger">
                Please enter Quantity of the product!
            </div>
        </div>
        <div class="form-group">
            <input type="number" step = '0.01' name="price" required class="form-control" placeholder=“Price” #priceModelRef="ngModel" ngModel>
            <div [hidden]="priceModelRef.valid || priceModelRef.pristine" class="alert alert-danger">
                Please enter Price of the product!
            </div>
        </div>
        <button type="submit" [disabled]="!productForm.form.valid" class="btn btn-primary">ADD PRODUCT</button>
        <br><br>
        <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>ACTIONS</th>
            </tr>
            <tr *ngFor = "let product of products">
                <td>{{product.id}}</td>
                <td>{{product.name}}</td>
                <td>{{product.quantity}}</td>
                <td>{{product.price}}</td>
                <td><button type="button" (click) = onEdit(product)>EDIT</button>&nbsp;&nbsp;<button type="button" (click) = onDelete(product.id)>DELETE</button>
            </tr>
        </table>
        </div>
    </form>`,
    providers: [ ProductService ],
    styles : ['table,td,th {border : 1px solid black}']
})

export class ProductComponent {

    public products = [];
    public productService : ProductService;
    public editprod = {"id":1,"name":"Chairs","quantity":30,"price":1500.0};
    public activatedRoute: ActivatedRoute;
    public router: Router;
   
    constructor(productService : ProductService, activatedRoute: ActivatedRoute , router: Router) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.router = router;
        let observable:Observable<Object> = productService.getProducts();
        observable.subscribe((response:any)=>this.products = response);
    }

    onSubmit(productFormValue: any) {
        console.log('Submitting product form: ', productFormValue);
        console.log('product quantity: ', productFormValue.quantity);
        //this.productService.addProduct(productFormValue);
        this.productService.addProduct(productFormValue).subscribe(prodob => this.products.push(prodob));
    }

    onEdit(editprod: any) {
        
        this.editprod = editprod;
        //this.product=
        //document.getElementById("new").innerHTML="<edit></edit>";
        let navigationExtras: NavigationExtras = {
            queryParams: editprod
        };
        console.log(navigationExtras);
            this.router.navigate(["edit"], navigationExtras);
        //this.router.navigate(['/edit', this.editprod.id]);
    }

    onDelete(id:number){
        this.productService.deleteProduct(id).subscribe(res=>console.log(res));
        window.location.reload();
    }



    

}

